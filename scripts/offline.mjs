import { readFileSync, writeFileSync, copyFileSync, mkdirSync, cpSync, readdirSync, existsSync, rmSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, "..");
const out = join(root, "out");
const dist = join(root, "ABDMAN-offline");

const htmlFiles = ["index.html", "resume.html", "404.html", "_not-found.html"];

function readdirRecursive(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) readdirRecursive(full, acc);
    else acc.push(full);
  }
  return acc;
}

function rewriteForFileProtocol() {
  for (const file of htmlFiles) {
    const p = join(out, file);
    if (!existsSync(p)) continue;
    let html = readFileSync(p, "utf8");
    html = html.replace(/<link[^>]*rel="preload"[^>]*as="font"[^>]*\/?>/g, "");
    html = html.replace(/\s\b(?:crossorigin|integrity)(?:="[^"]*")?/g, "");
    html = html.replace(/\s*type="module"/g, "");
    html = html.replaceAll('src="/_next/', 'src="./_next/');
    html = html.replaceAll('href="/_next/', 'href="./_next/');
    html = html.replaceAll('href="/favicon.ico"', 'href="./favicon.ico"');
    html = html.replaceAll('href="/CV.pdf"', 'href="./CV.pdf"');
    html = html.replaceAll('href="/resume"', 'href="./resume.html"');
    if (file === "index.html") {
      html = html.replaceAll('href="/#', 'href="#');
    } else {
      html = html.replaceAll('href="/#', 'href="./index.html#');
    }
    writeFileSync(p, html);
  }

  for (const cssPath of readdirRecursive(out).filter((f) => f.endsWith(".css"))) {
    let css = readFileSync(cssPath, "utf8");
    css = css.replaceAll("/_next/static/media/", "../media/");
    writeFileSync(cssPath, css);
  }
  console.log("folder rewrite done");
}

function dataUri(path, mime) {
  const b64 = readFileSync(path).toString("base64");
  return `data:${mime};base64,${b64}`;
}

function inlineFonts(css) {
  const resolveAsset = (path) => {
    const clean = path.split(/[?#]/)[0];
    let p = null;
    if (clean.startsWith("/_next/static/media/")) p = join(out, clean.slice(1));
    else if (clean.startsWith("../media/")) p = join(out, "_next", "static", "media", clean.slice("../media/".length));
    else if (clean.startsWith("media/") || clean.startsWith("./media/")) p = join(out, "_next", "static", "media", clean.replace(/^\.\/media\//, "media/").replace(/^media\//, ""));
    return p && existsSync(p) ? p : null;
  };
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, path) => {
    const p = resolveAsset(path);
    return p ? `url(${dataUri(p, "font/woff2")})` : m;
  });
}

function bundleSingleFile() {
  const src = join(out, "index.html");
  let html = readFileSync(src, "utf8");

  html = html
    .replaceAll('src="./_next/', 'src="/_next/')
    .replaceAll('href="./_next/', 'href="/_next/')
    .replaceAll('href="./resume.html"', 'href="/resume"')
    .replaceAll('href="./favicon.ico"', 'href="/favicon.ico"')
    .replaceAll('href="./CV.pdf"', 'href="/CV.pdf"')
    .replaceAll('href="./index.html#', 'href="/#');

  html = html.replace(
    /<link rel="stylesheet" href="\/_next\/static\/chunks\/([^"]+)"[^>]*\/?>/g,
    (m, name) => {
      let css = inlineFonts(readFileSync(join(out, "_next", "static", "chunks", name), "utf8"));
      css = css.replaceAll("</style", "<\\/style");
      return `\n<style>\n${css}\n</style>\n<link rel="stylesheet" data-offline="/_next/static/chunks/${name}" />\n`;
    }
  );

const shim = (path) =>
    `try{var s=document.currentScript;s&&s.setAttribute("src","${path}")}catch(_){}`;

  const patchLoader = (js) =>
    js
      .replaceAll("script[src=", "script[data-offline=")
      .replaceAll("script[src^=", "script[data-offline^=")
      .replaceAll("link[rel=stylesheet][href=", "link[data-offline=")
      .replaceAll("link[rel=stylesheet][href^=", "link[data-offline^=");

  const cssChunks = [];

  html = html.replace(
    /<link rel="stylesheet" href="\/_next\/static\/chunks\/([^"]+)"[^>]*\/?>/g,
    (m, name) => {
      let css = inlineFonts(readFileSync(join(out, "_next", "static", "chunks", name), "utf8"));
      css = css.replaceAll("</style", "<\\/style");
      cssChunks.push(name);
      return `\n<style>\n${css}\n</style>\n<link rel="stylesheet" data-offline="/_next/static/chunks/${name}" />\n`;
    }
  );

  html = html.replace(
    /<script src="\/_next\/static\/([^"]+)"([^>]*)><\/script>/g,
    (m, rest) => {
      let js = patchLoader(readFileSync(join(out, "_next", "static", rest), "utf8"));
      js = js.replaceAll("</script", "<\\/script").replaceAll("<!--", "<\\!--");
      return `\n<script data-offline="/_next/static/${rest}">${shim("/_next/static/" + rest)}${js}</script>\n`;
    }
  );

  html = html.replace(
    /<link rel="icon" href="(?:favicon\.ico|\/_next\/[^"]+)"[^>]*\/?>/g,
    `\n<link rel="icon" href="${dataUri(join(out, "favicon.ico"), "image/x-icon")}" />\n`
  );

  html = html.replace(
    /<link[^>]*(?:preload|modulepreload|prefetch)[^>]*\/?>/g,
    ""
  );
  html = html.replaceAll('href="/CV.pdf"', 'href="CV.pdf"');
  html = html.replaceAll('href="/resume"', 'href="CV.pdf"');
  html = html.replaceAll('href="/#', 'href="#');
  html = html.replace('<html lang="en"', '<html lang="en"');

  const bundle = join(dist, "ABDMAN-portfolio.html");
  writeFileSync(bundle, html);
  console.log("bundle written: ABDMAN-portfolio.html");
}
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
bundleSingleFile();
rewriteForFileProtocol();
cpSync(out, join(dist, "site"), { recursive: true });
copyFileSync(join(out, "CV.pdf"), join(dist, "CV.pdf"));

console.log("done →", relative(root, dist));