let str = "samantha <@AFN67hRH> ++ <@AGrnrgor3462> ++";

let pattern = /<@[0-9a-zA-Z]*>/g

let id = str.match(pattern);
console.log(id);