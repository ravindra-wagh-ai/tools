function id(n: number): number {
  var add = 1,
    max = 12 - add;

  if (n > max) {
    return id(max) + id(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10;
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  if (("" + number).substring(add).indexOf("0") == 0) {
    return id(n);
  }

  return Number(("" + number).substring(add));
}

export default {
  id: id,
  capitalize: (value: string) => {
    let wordArray = value.split(" ");
    let words: string[] = [];
    wordArray.forEach((word) => {
      const lower = word.toLowerCase();
      words.push(word.charAt(0).toUpperCase() + lower.slice(1));
    });
    return words.join(" ");
  },
  convert: (value: string, timeZone: string) => {
    var dateString = new Date(value).toLocaleString("en-US", {
      timeZone: timeZone,
    });

    var target = new Date(dateString);
    var timeOffsetInMS = target.getTimezoneOffset() * 60000;
    target.setTime(target.getTime() - timeOffsetInMS);

    return target;
  },
  phoneX: (value: string) => {
    let numberRegx = "/\d+/g";
    return value?.match(numberRegx)?.join("");
  },
  round: (value: number) => {
    return Math.round((value + Number.EPSILON) * 100) / 100
  }
};
