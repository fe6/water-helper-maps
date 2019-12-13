const fs = require('fs');
const attrs = require("../out/maps/water-attributes");
const tags = require("../out/maps/water-tags.json");

// 将 attr 中的属性，提取出来放到 tag json 中
Object.keys(attrs.default).forEach((attrItem) => {
  const attrLists = attrItem.split('/');

  if (attrLists.length > 1) {
    const [tag, attr] = attrLists;
    if (tags[tag]) {
      tags[tag].attributes.push(attr);
    }
  }
});

let str = JSON.stringify(tags);

fs.writeFile('./out/maps/water-tags.json',str,function(err){
  if (err) {res.status(500).send('Server is error...')}
})


