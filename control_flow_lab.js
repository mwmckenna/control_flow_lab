var foods = ["pizza", "cheeseburgers", "ice cream", "pasta"];
if (foods.length == 0) {
	console.log("You have no food");
	} 
	else if (foods.length == 1) {
	console.log("You have one food");
	} 
	else {
	console.log("You have lots of food");
	}

var i = 99;
var b = (i - 1);
while (i > 0) {
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + b + " bottles of beer on the wall...");
	i--;
	b--;
}

var people = ["Lisa", "Emilie", "Lindsey", "Elly"];
for (var i = 0; i < people.length; i++) {
	console.log("Hello, " + people[i] + "!");
}

