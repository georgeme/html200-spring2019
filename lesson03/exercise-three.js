
// Declare the variable
let insurance = ['collision', 'comprehensive', 'personal injury protection', 'underinsured motorist', 'bodily injury', 'property damage', 'emergency road', 'rental expense'];

// FOR loop checks for the value of the quantity of items in the variable
for (let i = 0; i < insurance.length; i++) {
	// Console log the value of "i" + 1 starting with "0", the comma, and the insurance variable value
     console.log(i + ',' + insurance[i]);
}

// Expected result (a list of all the items preceeded by their index # and a comma:
// "0,collision"
// "1,comprehensive"
// "2,personal injury protection"
// "3,underinsured motorist"
// "4,bodily injury"
// "5,property damage"
// "6,emergency road"
// "7,rental expense"


