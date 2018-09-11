class RotationalCipher {
  static rotate(str, num) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        if ((str.charCodeAt(i) + num) > 90) {
          result += String.fromCharCode(65 + (num - (90 % str.charCodeAt(i)) - 1))
        } else {
          result += String.fromCharCode(str.charCodeAt(i) + num)
        }
      } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        if (str.charCodeAt(i) + num > 122) {
          result += String.fromCharCode(97 + (num - (122 % str.charCodeAt(i)) - 1))
        } else {
          result += String.fromCharCode(str.charCodeAt(i) + num)
        }
      } else {
        result += str[i];
      }
    }
    return result;
  }
}

export default RotationalCipher;