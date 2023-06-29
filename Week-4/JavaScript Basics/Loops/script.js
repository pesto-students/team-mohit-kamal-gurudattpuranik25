function drawTriangle(triangleSize) {
  // Your solution goes here
  let pattern = "";
  for (let i = 0; i < triangleSize; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
