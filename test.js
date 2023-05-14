let pattern = /\@(.*?)\>/g
let master = "samantha info <@ABENTT257SDbs>";
let id = master.match(pattern);
console.log(id);