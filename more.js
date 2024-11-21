// Build a program that reads a file, checks if it exists, 
// and appends content to the file if it does. 
// If the file doesn't exist, create a new file with a default message

const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading 'text.txt':", err); 
    return;
  }

  console.log("File content:", data); 
 
  if (fs.existsSync("newfile.txt")) {
    
    fs.appendFile("text.txt", "node js exercises", (err) => {
      if (err) {
        console.error("Error appending to 'text.txt':", err);
      } else {
        console.log("'node js exercises' appended to 'text.txt'");
      }
    });
  } 
  else {
    fs.writeFile("newfile.txt", data, (err) => {
      if (err) {
        console.error("Error writing to 'newfile.txt':", err);
      } else {
        console.log("Content from 'text.txt' written to 'newfile.txt'");
      }
    });
  }
});
