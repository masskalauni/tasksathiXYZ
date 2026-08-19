import fs from "fs";
import path from "path";

const dist = path.resolve("dist");

const routes = [
  "/about",
  "/services",
  "/services/custom-software-development",
  "/services/pos-systems",
  "/services/ai-automation",
  "/services/website-development",
  "/products",
  "/industries",
  "/pricing",
  "/portfolio",
  "/case-studies",
  "/blog",
  "/careers",
  "/contact",
];

const source = path.join(dist, "index.html");
const html = fs.readFileSync(source, "utf8");

for (const route of routes) {
  const routePath = path.join(
    dist,
    route.replace(/^\/|\/$/g, "")
  );

  fs.mkdirSync(routePath, { recursive: true });

  fs.writeFileSync(
    path.join(routePath, "index.html"),
    html
  );

  console.log(`Generated: ${route}/index.html`);
}