function firstWord(s) {
  // your code here
	s = s.trim();
	if(s === ''){
		return '';
	}
	const spaceIndex = s.indexOf('');
	if(spaceIndex===-1){
		return s;
	}
	return s.subString(0,spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
