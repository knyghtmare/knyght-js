var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
error = false;

while (response != password && !error) {
    if (entryCount < entryLimit) {
        response = window.prompt("Enter Password:");
        entryCount++;
    } else {
        error = true;
    }
}
if (!error) {
    alert("You got it!");
} else {
    alert("Better Luck Next time");
}