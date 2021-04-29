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
  
  for (let i = 0; i <= 30; i++) {
    randomNum = Math.floor(Math.random() * Characters.length);
    result += Characters[randomNum];
  }
 document.getElementById("PasswordGen").value=result;
  
    console.log(result);
  
};

