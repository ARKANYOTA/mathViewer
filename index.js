#!/usr/bin/env node
// const { argv } = require('process');
const fs = require('fs')

var MarkdownIt = require('markdown-it'), md = new MarkdownIt();
function parse(file, tofile){
    fs.writeFileSync(tofile ,"<script src=\"https:\/\/cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=AM_CHTML\"></script>" +  md.render(fs.readFileSync(file, 'utf-8')));

}
parse("cours2.md", "cours.html")
