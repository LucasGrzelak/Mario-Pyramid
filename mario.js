document.getElementById("button").onclick = function printPyramid(height) {
  var height = document.getElementById("height").value;
  if (height > 0) {
    document.getElementById("pyramid").innerHTML = "";
    var pyramid = []
    function printPyramid(height) {
      height = parseInt(height) + 1;
      let space = ".";
      let brick = "#";
      let layer = "";
      let BR = "<br />";
        a = height;
        for(b = height; b > 0; b--) {
          heightHeight = height + 1;
          for(c = 0; c < heightHeight; c++) {
            layer = layer + brick;
            }
          for(d = a; d > height + 1; d--) {
            layer = space + layer;
            }
          let e = b - 1
          pyramid[e]=(layer + BR);
          layer = "";
          height = height - 1;
            }
    }
    printPyramid(height);
    f = height;
    for(g = 0; g < f; g++) {
      document.getElementById("pyramid").innerHTML += "<p>" + pyramid[g] + "</p>";
      console.log(pyramid[g])
      }
  }
}