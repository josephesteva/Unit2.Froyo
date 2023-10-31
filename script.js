//get a list of flavors from the user
const flavors = prompt("What Froyo flavors would you like? ");

const flavorCount = (flavorList) => {
	//separate list into an array of values (use split with comma)
	const flavorArray = flavorList.split(`,`);
	//create an object that will eventually contain a key (flavor) and value (number of order)
	const flavorCount = {};
	//iterate through each item in the array
	for (i = 0; i < flavorArray.length; i++) {
		//if flavor does not exist in object, create a new key and set value to 1
		if (flavorCount[flavorArray[i]] == null) {
			flavorCount[flavorArray[i]] = 1;
		} 
		//if flavor does exist, increment count by 1
		else {
			flavorCount[flavorArray[i]]++;
		}
	}
	return flavorCount;
	}

	console.log(flavorCount(flavors));


	//vanilla,strawberry,chocolate,vanilla,chocolate,chocolate