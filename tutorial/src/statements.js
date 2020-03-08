var isMale = false;
var isTall = true;

if (isMale && isTall) {
  document.write("You are a tall guy.");
} else if (isMale && !isTall) {
  document.write("You are a short guy.");
} else if (!isMale && isTall) {
  document.write("You are a tall girl.");
} else {
  document.write("You are neither tall nor a guy.");
}
