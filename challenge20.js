function addButtonsToNode(howmany, domnode)
{
	for(var i = 0; i < howmany; i++)
	{
		var div = document.createElement("div");
		domnode.appendChild(div);
		div.innerHTML = i;
		div.onClick = function(e)
		{
			alert(i);
		}
	}
}
