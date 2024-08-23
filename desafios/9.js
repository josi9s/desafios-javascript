let age = 60;
let userType;
let taxes = 2.5;

if (age < 6) {
  taxes = 0;
}

if (userType == "student" || (age >= 60 && userType == "student")) {
  taxes *= 0.5;
}

if (age >= 60 && userType != "student") {
  taxes *= 0.3;
}

console.log(taxes.toFixed(2));
