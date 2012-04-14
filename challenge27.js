var obj = {
	table1:
	[
	{id:1,label:"container1",parent:null},
	{id:2,label:"container2",parent:1},
	{id:3,label:"container3",parent:1},
	{id:4,label:"container4",parent:2},
	],
	 table2:
	[
	{id: 5, label: "leaf1", parent: 1},
	{id: 6, label: "leaf2", parent: 4},
	{id: 7, label: "leaf3", parent: 4},
	{id: 8, label: "leaf4", parent: 3},
	]
}

var tree=[];

function Node(id, data, parent) {
	this.id  = id;
	this.data  = data;
	this.parent = parent;
}

function getNode(parent){
	var n;
	for (n in tree) {
		if (tree[n].id == parent)
			return tree[n];
	}
}

function makeTree() {
	var i,j,n;
	// Parse the data and save references
	for (i in obj) {
		for ( j in obj[i]) {
			var nd = obj[i][j]
			tree.push(new Node(nd.id, nd.label, nd.parent));
		}
	}
	// Or store the actual object 
	for (n in tree) {
		var parentObj = getNode(tree[n].parent);
		tree[n].parent = parentObj;
	}
}