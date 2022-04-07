import axios from 'axios';

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j9Z2IwQVH3jsmZjNAYhp/scores/';

const sendData = async () => {
  const userName = document.getElementById('name-input').value;
  const userScore = document.getElementById('score-input').value;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: { 'content-type': 'application/JSON' },
  });
  response.json();
};

export default sendData;
