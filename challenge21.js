var foo={},bar={};

var numCall = 1;
function addfunc(obj) {
	obj.numCall=numCall++;
	obj.constructor.prototype.newFunc = function () {
				return this.numCall;
	}; 
	return obj;
}
// Create a function addfunc() which takes a JavaScript obj and addsa new property
// to it and returns it. The new property should be a function which returns a number
// which reflects the order of the addfunc() call
function init() {
	foo = addfunc(foo);
	bar = addfunc(bar);
	
	alert(foo.newFunc()); // returns 1
	alert(bar.newFunc()); // returns 2
}