function getMaxDigit(number) {
    let maxDigit = 0;
    while (number > 0) {
      const digit = number % 10;
      if (digit > maxDigit) {
        maxDigit = digit;
      }
      number = Math.floor(number / 10);
    }
    return maxDigit;
  }

    console.log(getMaxDigit("7983"));