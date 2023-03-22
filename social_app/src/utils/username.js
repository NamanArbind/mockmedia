const ADJECTIVES = [
  "nasty",
  "narrow",
  "elastic",
  "grandiose",
  "waggish",
  "meaty",
  "heavenly",
  "cynical",
  "perpetual",
  "wicked",
  "pricey",
  "garrulous",
  "tacky"
];
const objects = [
  "lamp",
  "chocolates",
  "twilight",
  "sketchpad",
  "stick",
  "statuette",
  "rat",
  "cucumber",
  "rope",
  "hanger",
  "hamster",
  "flowers",
  "bell"
];
function randomusername()
{
    let adj=ADJECTIVES[Math.floor(Math.random()*13)]
    let obj=objects[Math.floor(Math.random()*13)]
    return `${adj}_${obj}`
}
module.exports={
    randomusername
}
