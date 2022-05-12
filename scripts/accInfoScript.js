function submitDetails() {
	//array for storage
	var accessoryDetails = [parseInt(common.value),
							parseInt(uncommon.value),
							parseInt(rare.value),
							parseInt(epic.value),
							parseInt(legendary.value),
							parseInt(mythic.value)];
	
	//converts the array into a string
	var strAccessoryDetails = JSON.stringify(accessoryDetails);	
	
	//checks if the browser supports the session storage object
	if (typeof(Storage) !== "undefined") {	
		//stores the stringified array into session storage
		sessionStorage.setItem("details", strAccessoryDetails);
	} else {
		alert() = "Sorry, your browser does not support Web Storage.";
		
		return false;
	}
	
	//checks if all input boxes have input
	if (common.value == ""
		|| uncommon.value == ""
		|| rare.value == ""
		|| epic.value == ""
		|| legendary.value == ""
		|| mythic.value == "") {
		alert("Please make sure to fill out all the input boxes.");
		
		return false;
	}
}