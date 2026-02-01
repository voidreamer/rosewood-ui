#!/usr/bin/env node
/**
 * Rosewood UI — Build Script
 * Resolves @import statements and outputs concatenated + minified CSS.
 * No dependencies required.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src/css');
const DIST = path.join(__dirname, 'dist');
const ENTRY = path.join(SRC, 'rosewood.css');

function resolveImports(filePath, seen = new Set()) {
  if (seen.has(filePath)) return '';
  seen.add(filePath);

  const content = fs.readFileSync(filePath, 'utf8');
  return content.replace(/@import\s+['"]([^'"]+)['"]\s*;/g, (match, importPath) => {
    // Skip URL imports (like Google Fonts)
    if (importPath.startsWith('http') || importPath.startsWith('//')) return match;
    const resolved = path.resolve(path.dirname(filePath), importPath);
    return resolveImports(resolved, seen);
  });
}

function minify(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')    // remove comments
    .replace(/\s+/g, ' ')                 // collapse whitespace
    .replace(/\s*([{}:;,>~+])\s*/g, '$1') // remove space around symbols
    .replace(/;}/g, '}')                   // remove last semicolons
    .replace(/^\s+|\s+$/g, '');            // trim
}

function build() {
  fs.mkdirSync(DIST, { recursive: true });

  const css = resolveImports(ENTRY);
  const min = minify(css);

  fs.writeFileSync(path.join(DIST, 'rosewood.css'), css);
  fs.writeFileSync(path.join(DIST, 'rosewood.min.css'), min);

  const sizeKB = (Buffer.byteLength(min) / 1024).toFixed(1);
  console.log(`✅ Built dist/rosewood.css (${(Buffer.byteLength(css) / 1024).toFixed(1)} KB)`);
  console.log(`✅ Built dist/rosewood.min.css (${sizeKB} KB)`);
}

// Watch mode
if (process.argv.includes('--watch')) {
  build();
  console.log('\n👀 Watching for changes...');
  
  const watchDirs = [SRC, path.join(SRC, 'components')];
  watchDirs.forEach(dir => {
    fs.watch(dir, { recursive: false }, (event, filename) => {
      if (filename && filename.endsWith('.css')) {
        console.log(`\n🔄 ${filename} changed, rebuilding...`);
        try { build(); } catch (e) { console.error('Build error:', e.message); }
      }
    });
  });
} else {
  build();
}
