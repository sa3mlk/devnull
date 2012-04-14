function reverse(s) {
	var mid = Math.floor(s.length / 2);
	var rev = s.split("").reverse().join("");
	return rev.replace(rev.charAt(mid), "")
}

