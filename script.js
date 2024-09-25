function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');
	const topRow = table.insertRow(0);
	const cell1 = topRow.insertCell(0);
	const cell2 = topRow.insertCell(1);
	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2"
  
  
}
