// Albert Martinez
// 08/28/2014
// Functions_Personal
/* REFERENCES: The American Heart Association (2014) Understanding Blood Pressure Readings. Retrieved from: 
	http://www.heart.org/HEARTORG/Conditions/HighBloodPressure/AboutHighBloodPressure/Understanding-Blood-Pressure-Readings_UCM_301764_Article.jsp*/
// Create a program that returns the status of your blood pressure reading = Normal, High Normal, High, Very High, Seek Medical Attention
// prompt user for top/ first/ larger(normally) number also called the systolic blood pressure number
var sysNum = prompt("Time to check your blood pressure status\nPlease provide your systolic blood pressure number");

//validate user prompts for both blank fields and invalid input types-- in this case, check for non numbers
while (sysNum === "" || isNaN(sysNum)) {
	// re prompt user for information if invalid or no input was recieved
	sysNum = prompt("Do not leave any fields blank and enter numbers only!\nPlease provide your systolic blood pressure number");
}

// prompt user for bottom/ second/ smaller(normally) number also called the diastolic blood pressure number
var diaNum = prompt("Please provide your diastolic blood pressure number");

//validate user prompts for both blank fields and invalid input types-- in this case, check for non numbers
while (diaNum === "" || isNaN(diaNum)) {
	// re prompt user for information if invalid or no input was recieved
	diaNum = prompt("Do not leave any fields blank and enter numbers only!\nPlease provide your diastolic blood pressure number");	
}

// create categories for the "if...then" statements for the varying 5 levels of blood pressure results 
var normal = "Your blood pressure of " + sysNum + "mm Hg is Normal";
var highNormal = "Your blood pressure of " + sysNum + "mm Hg can be a sign of prehypertension. Talk to your doctor, he may reccommend changing to healthier eating habits along with other smart and healthy life habits and choices to look into";
var highBP1 = "Your blood pressure reading: " + sysNum + "mm Hg is measured as a High Blood Pressure Level! You should seek medical attention quickly and let them know you are showing signs of High Blood Pressure stage 1";
var highBP2 = "Seek Medical attention promptly, " + sysNum + "mm Hg is measured as being Very High Blood Pressure - level 2!";

// use conditionals to check the several outcomes in each category of blood pressure readings(American Heart Association, 2014)
if( sysNum <= 120 && diaNum <= 80) {
	console.log(normal);
}
if ( sysNum > 120 && sysNum < 139 || diaNum > 80 && diaNum < 89){
	console.log(highNormal);
}
if ( sysNum > 140 && sysNum < 159 || diaNum > 90 && diaNum < 99){
	console.log(highBP1);
}
else if ( sysNum >= 160 || diaNum >= 100){
	console.log(highBP2);
}