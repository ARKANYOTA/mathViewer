#!/usr/bin/env node
const { argv } = require('process');
const fs = require('fs')

function parse(file){
    fs.readFileSync(file, 'utf-8').split(/\r?\n/).forEach(function(line){
        console.log(line);
        
    });
}

parse("README.md")
