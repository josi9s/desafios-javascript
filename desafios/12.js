let num = 4;
let divisibles = 0;

for (i = 1; i <= num; i++) {
  let n = i;

  for (x = 1; x <= n; x++) {
    if (n % x == 0) {
      divisibles++;
    }
  }

  if (divisibles != 2) {
    divisibles = 0;
  } else {
    console.log(n);
    divisibles = 0;
  }
}
