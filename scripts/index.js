// passwordGen

function passwordGen() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const uppercase = [
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
  ];
  const lowercase = [
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
  ];
  const symbols = ["!", "#", "§", "$", "%", "&", "/", "?"];
  let result = "";
  let randomNum;
  let Characters = [];
  document.querySelector("#passGen").addEventListener("click", () => {
    const includeLowerCase = document.getElementById("lowercase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    if (includeLowerCase == true) {
      for (let i = 0; i < lowercase.length; i++) {
        Characters.push(lowercase[i]);
      }
    }
    if (includeNumbers == true) {
      for (let i = 0; i < num.length; i++) {
        Characters.push(num[i]);
      }
    }
    if (includeUpperCase == true) {
      for (let i = 0; i < uppercase.length; i++) {
        Characters.push(uppercase[i]);
      }
    }
    if (includeSymbols == true) {
      for (let i = 0; i < symbols.length; i++) {
        Characters.push(symbols[i]);
      }
    }

    console.log(Characters);
    const length = document.querySelector("#length").value;
    for (let i = 0; i <= length - 1; i++) {
      randomNum = Math.floor(Math.random() * length);
      result += Characters[randomNum];
    }
    document.getElementById("PasswordGen").value = result;
  });
}
