document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTable(index);
    });
  });

  function sortTable(columnIndex) {
    const rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)'));
    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].innerText;
      const cellB = rowB.cells[columnIndex].innerText;
      
      return cellA.localeCompare(cellB);
    });

    sortedRows.forEach(row => table.appendChild(row));
  }
});
