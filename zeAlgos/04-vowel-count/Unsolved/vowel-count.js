// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  let vowels = 0;
  str
    .toLowerCase()
    .split("")
    .map((e) => {
      if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
        vowels++;
      }
    });
    return vowels;
};
