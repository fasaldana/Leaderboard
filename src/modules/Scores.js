import axios from 'axios';
const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j9Z2IwQVH3jsmZjNAYhp/scores/';
var list = document.querySelector('.scores-table');
const table = document.getElementById('table');

const listTable = async () => {
  try {
    const resPost = await axios(url);
    console.log(resPost);
    for (var i = 0; i < resPost.data.result.length; i += 1) {
      var row = document.createElement('tr');
      for (var j = 0; j < 2; j += 1) {
        if (j === 0) {
          var cell = document.createElement('td');
          var cellText = document.createTextNode(
            `${resPost.data.result[i].user}`
          );
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (j === 1) {
          var cell = document.createElement('td');
          var cellText = document.createTextNode(
            `${resPost.data.result[i].score}`
          );
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      }
      table.appendChild(row);
    }
    list.append(table);
  } catch (error) {
    console.log(error);
  }
};

export default listTable;
