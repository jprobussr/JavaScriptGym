const _ = {
  clamp(number, lower, upper) {
    if (number < lower) {
      return lower;
    } else if (number > upper) {
      return upper;
    } else {
      return number;
    }
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(_.inRange(20, 10));
