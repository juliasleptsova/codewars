function palindrome(str) {
  let arr = [...str.split('')]
  let newStr = ''
  for(let i = 0; i < arr.length; i++){
    if(isLetter(arr[i])) {
      newStr += arr[i]
    }
  }
  for(let i = 0; i < newStr.length / 2; i++){

    if (newStr[i].toLowerCase() != newStr[newStr.length - i -1].toLowerCase()) {
      return false
      
    }
  }
  return true;
}

function isLetter(str) {
  return str.match("^[A-Za-z0-9]+$");
}
