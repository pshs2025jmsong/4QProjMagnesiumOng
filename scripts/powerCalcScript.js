function loadDetails() {
	//retrieves stored stringified array from session storage
	retrieved = sessionStorage.getItem("details");
	accessoryDetails = JSON.parse(retrieved);
	
	//calculates magical power
	magicalPower.innerHTML = accessoryDetails[0] * 3 + 
							accessoryDetails[1] * 5 + 
							accessoryDetails[2] * 8 + 
							accessoryDetails[3] * 12 + 
							accessoryDetails[4] * 16 + 
							accessoryDetails[5] * 22;
	
	//calculates multiplier
	multiplier.innerHTML = 29.97 * Math.pow(Math.log(0.0019 * magicalPower.innerHTML + 1), 1.2);
}