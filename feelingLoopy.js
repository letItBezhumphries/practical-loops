const fs = require('fs');

let fileText = fs.readFileSync('./file.txt', { encoding: 'utf-8' });

// const container = document.getElementById('container');

const createTable = function (filetxt) {
  let innerHtml = '<table>';

  var row;
  for (let i = 0; i < filetxt.length; i++) {
    let rowColums = filetxt[i].split(',');
    console.log('rowColums:', rowColums);
    row = '<tr>';
    for (let j = 0; j < rowColums.length; j++) {
      row = row + `<td>${rowColums[j]}</td>`;
      console.log('row:', row);
    }
    row = row + '</tr>';

    innerHtml += row;
  }

  innerHtml = innerHtml + '</table>';
  console.log('innerHtml:', innerHtml);
  return innerHtml;
};

createTable(fileText.split('\n'));
