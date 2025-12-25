const password = '9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23';

const removeDuplicateStrings = (chars) => {
  let duplicatesRemoved = '';

  for (let i = 0; i < chars.length; i++) {
    if (!duplicatesRemoved.includes(chars[i])) {
      duplicatesRemoved += chars[i];
    }
  }

  return duplicatesRemoved;
};


console.log(removeDuplicateStrings(password));