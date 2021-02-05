height = parseInt (prompt("What is the height?"));
if (height > 0) {
let pyramid = []
function printPyramid(height) {
let space = " . ";
let brick = "#";
let layer = "";
let BR = "<br />";
    a = height;
	  for(b = height; b > 0; b--) {
		heightHeight = height + 1;
		for(c = 0; c < heightHeight; c++) {
			layer = layer + brick;
			}
		for(d = a; d > height; d--) {
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
    for(g = 0; g < f; g++){
	  document.write(pyramid[g]);
      }
}