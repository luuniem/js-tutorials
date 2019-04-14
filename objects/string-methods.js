let name = "   Niem Nguyen    ";

//length property

console.log(name.length);

//convert to uppercase
console.log(name.toUpperCase());

///INcludes method

let password = "abc123password098";

console.log(password.includes("passwrd"));

//Trim extra space
console.log(name.trim());

//Challenge

//isValidPassword
// length is more than 8 and doesn't contain word password

let isValidPassword = password => {
  return password.length >= 8 && !password.includes("password") ? true : false;
};
console.log(isValidPassword("asdfp"));
console.log(isValidPassword("asdfp3123123"));
console.log(isValidPassword("asdfppassword"));
