const vowels = ["a", "e", "i", "o", "u"];
let article = "";
let tellFortune = (numChildren, partnerName, location, jobTitle) => {
  for (i = 0; i < vowels.length; i++) {
    if (jobTitle.charAt(0).toLowerCase() === vowels[i]) {
      return `You will be ${(article =
        "an")} ${jobTitle} in ${location} and married to ${partnerName} with ${numChildren}.`;
      break;
    }
  }
  return `You will be ${(article =
    "a")} ${jobTitle} in ${location} and married  to ${partnerName} with ${numChildren}.`;
};
console.log(tellFortune(2, "Linh", "Vancouver", "Engineer"));
