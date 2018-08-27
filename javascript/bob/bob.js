/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  onlyNumber(str) {
    str = str.replace(/[\:\,\s]+/g, '')
    return Number.isInteger(Number(str))
  }

  hey(message) {
    message = message.trim()
    if (!message) {
      return 'Fine. Be that way!'
    }

    if (message[message.length - 1] === '?') {
      if (message === message.toUpperCase() && !this.onlyNumber(message[0])) {
        return 'Calm down, I know what I\'m doing!'
      }
      return 'Sure.'

      // if (message[message.length - 1] === '?' && )
      // if (!Number(message[0])) {

      // }
    }

    // if (message[message.length - 1] === '?') {
    //   return 'Sure.'
    // }

    if (message === message.toUpperCase() && !this.onlyNumber(message)) {
      return 'Whoa, chill out!'
    }

    return 'Whatever.'
  }
}

export default Bob;