const form = document.querySelector('form');
const input = document.querySelector('#input-text');
const table = document.querySelector('#text-table');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  // Clear previous rows in the table
  table.innerHTML = '<tr><th>Submitted Text</th></tr>';
  // Add new row with submitted text
  const row = table.insertRow(1);
  const cell = row.insertCell(0);
  cell.innerHTML = text;
});
