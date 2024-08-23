let Rectangle = {
  b: 4,
  h: 2,
};

let Perimeter = () => {
  return (Rectangle.b + Rectangle.h) * 2;
};

let Area = () => {
  return Rectangle.b * Rectangle.h;
};

console.log("Perimeter: ", Perimeter());
console.log("Area: ", Area());
