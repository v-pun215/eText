document.getElementById("heading").innerHTML =
  localStorage["title"] || "Heading"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "Content; Keep Writing It Will Adjust. "; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);
