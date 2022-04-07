import axios from 'axios';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const list = document.querySelector('.scores-table');
const table = document.getElementById('table');
let cell;
let row;
let cellText;

const listTable = async () => {
  try {
    const resPost = await axios(`${url}/games/j9Z2IwQVH3jsmZjNAYhp/scores/`);
    for (let i = 0; i < resPost.data.result.length; i += 1) {
      row = document.createElement('tr');
      for (let j = 0; j < 2; j += 1) {
        if (j === 0) {
          cell = document.createElement('td');
          cellText = document.createTextNode(`${resPost.data.result[i].user}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (j === 1) {
          cell = document.createElement('td');
          cellText = document.createTextNode(`${resPost.data.result[i].score}`);
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
