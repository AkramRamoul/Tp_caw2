const fs = require("fs");
const procces = require("process");

exrpssion = process.argv[2].toLocaleLowerCase();
let exist = true;
let i = 3;
while (exist) {
  const filepath = procces.argv[i];
  if (filepath != undefined) {
    fs.readdir(filepath, (err, files) => {
      if (err) {
        // if user enters just a file name note a directory
        grep(filepath);
      } else {
        files.forEach((file) => {
          // if user enters Directory
          grep(filepath + "\\" + file);
        });
      }
    });
    i += 1;
  } else {
    exist = false;
  }
}
//main function
function grep(file) {
  try {
    const strings = fs.readFileSync(file, "utf-8");
    if (strings) {
      // check expression in file
      var found = strings.match(exrpssion);
      if (found) {
        console.log("found expression in" + " " + file);
      } else {
        console.log("didn't find expression in" + " " + file);
      }
    } else {
      console.log(file + " " + "empty");
    }
  } catch (error) {
    console.log(file + " file doesn't exist");
  }
}
// example node Tp5.exo3.js "abcd" C:\Users\win10\Desktop\M1\CAW
