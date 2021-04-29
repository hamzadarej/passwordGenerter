// passwordGen
let Characters = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "q",
  "w",
  "e",
  "r",
  "t",
  "z",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "ö",
  "ä",
  "y",
  "x",
  "c",
  "b",
  "n",
  "m",
  "!",
  "#",
  "§",
  "$",
  "%",
  "&",
  "/",
  "?",
];

function passwordGen() {
  let result = "";
  let randomNum;
  const results = document.querySelector("#passwordGen");
  for (let i = 0; i <= 30; i++) {
    randomNum = Math.floor(Math.random() * Characters.length);
    result += Characters[randomNum];
  }
  
    results.innerHTML+=result;
  
};
console.log(passwordGen());
