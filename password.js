let passwordInput = process.argv[2].split('');

function obfuscator (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      arr[i] = 4;
    } else if (arr[i] === "e") {
      arr[i] = 3;
    } else if (arr[i] === "o") {
      arr[i] = 0;
    } else if(arr[i] === "l") {
      arr[i] = 1;
    }
  }
  arr = arr.join('')
  return arr;
}

console.log(obfuscator(passwordInput));