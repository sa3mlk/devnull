function addButtonsToNode(howmany, domnode)
{
	for(var i = 0; i < howmany; i++)
	{
		var div = document.createElement("div");
		domnode.appendChild(div);
		div.innerHTML = i; 
		div.onclick = function(e)
		{
			alert(div.innerHTML); // if alerting i, always will be the last number 
		}
	}
}
