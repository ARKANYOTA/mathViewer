#!/usr/bin/env node
// const { argv } = require('process');
const fs = require('fs')

var MarkdownIt = require('markdown-it'), md = new MarkdownIt();
function parse(file, tofile){
    fs.writeFileSync(
        tofile ,`
<!DOCTYPE html>
<html>
    <head>
        <title>ArkanYota Cours</title>
        <script>
            MathJax = {
                loader: {load: ['input/asciimath', 'output/chtml']}
                tex: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']]
                }
            }
        </script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js"></script>
        <body>
            ${md.render(fs.readFileSync(file, 'utf-8'))}
        </body>
</html>`
);

}
parse("cours2.md", "cours.html")
