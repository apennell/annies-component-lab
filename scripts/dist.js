'use strict';

const transform = require('babel-core').transform;
const fs = require('fs');
const path = require('path');
const outputFileSync = require('output-file-sync');

// the package doing the import will probably minify. We just want to produce
// a file in es2015 so that importing/require'ing will work nicely with any
// external packages.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const buildContent = function(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename;
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, {encoding: 'utf8'});
}

const buildFile = function(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, {encoding: 'utf8'});
  const outputPath = path.join(destination, path.basename(filename));
  if (path.extname(filename) === '.jsx' || path.extname(filename) === '.js') {
    buildContent(content, filename, outputPath.replace(".jsx", ".js"), babelOptions);
  } else if (path.extname(filename) === '.css') {
    outputFileSync(outputPath, content, {encoding: 'utf8'});
  }
}

const buildFolder = function(folderPath, destination, babelOptions = {}, firstFolder = true) {
  let stats = fs.statSync(folderPath);

  if (stats.isFile()) {
    buildFile(folderPath, destination, babelOptions);
  } else if (stats.isDirectory()) {
    let outputPath = firstFolder ? destination : path.join(destination, path.basename(folderPath));
    let files = fs.readdirSync(folderPath).map(file => path.join(folderPath, file));
    files.forEach(filename => buildFolder(filename, outputPath, babelOptions, false));
  }
}

buildFolder('src/components/Elements', 'dist/components/Elements', { presets: ['es2015'] });
buildFolder('src/components/style_vars', 'dist/components/style_vars', { presets: ['es2015'] });
buildFolder('src/components/Identity', 'dist/components/Identity', { presets: ['es2015'] });

/*const filename = "src/components/Elements/Button/Button.jsx";*/
/*const content = fs.readFileSync(filename, {encoding: 'utf8'});*/
/*const babelOptions = {*/
  /*presets: ['es2015']*/
  /*};*/
  /*babelOptions.filename = filename;*/
  /*const result = transform(content, babelOptions);*/
  /*//outputFileSync(destination, result.code, {encoding: 'utf8'});*/

  /*console.log(result.code);*/
