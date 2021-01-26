// TODO #2
// Take in user input for the height
height = parseInt (prompt("What is the height?"));
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
    // TODO #1
    // print that pyramid!
console.log("--------------------");
console.log("Example - Height: 5")
console.log("    ##");
console.log("   ###");
console.log("  ####");
console.log(" #####");
console.log("######");
console.log("--------------------");

console.log("Height entered: " + height)
if (height > 0) {
let pyramid = []
function printPyramid(height) {
let space = " ";
let brick = "#";
let layer = "";
    a = height;
	  for(b = height; b > 0; b--){
		heightHeight = height + 1;
		for(c = 0; c < heightHeight; c++) {
			layer = layer + brick;
			}
		for(d = a; d > height; d--) {
			layer = space + layer;
			}
		let e = b - 1
		pyramid[e]=(layer);
		layer = "";
		height = height - 1;
	    }
}
    printPyramid(height);
    f = height;
    for(g = 0; g < f; g++){
	  console.log(pyramid[g]);
      }
}
if (height <= 0) {
  console.log("Number must be greater than 0.");
}
console.log("--------------------");