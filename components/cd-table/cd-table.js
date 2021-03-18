// Table headings added as data-content to table cells for cards on mobile
function cdResponsiveTables() {
  var table = document.querySelector('.cd-table--responsive');
  if (!table) {
    return;
  }

  var tableRows = table.querySelectorAll('tbody tr');
  var tableHeadings = table.querySelectorAll('th');
  var tableHeadingCollection = Array.from(tableHeadings);

  for (var i = 0; i < tableRows.length; i++) {
    var tableCells = tableRows[i].querySelectorAll('td');
    var tableCellsCollection = Array.from(tableCells);

    for (var j = 0; j < tableCellsCollection.length; j++) {
      if (j === tableHeadingCollection.length) {
        continue;
      }
      var tableHeadingLabel = tableHeadingCollection[j].innerHTML;
      tableCellsCollection[j].setAttribute('data-content', tableHeadingLabel);
    }
  }
};

cdResponsiveTables();
