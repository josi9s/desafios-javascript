let Rectangle = {
  height: 2,
  width: 2,
};

let Perimeter = () => {
  let recPer = Rectangle.height * 2 + Rectangle.width * 2;
  console.log("Perimeter: " + recPer);
};

let Area = () => {
  let recArea = Rectangle.height * Rectangle.width;
  console.log("Area: " + recArea);
};

Perimeter();
Area();
