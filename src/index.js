import './style.css';
import sendData from './modules/sendData';
import loadData from './modules/Scores';

loadData();
document
  .querySelector('.refresh-btn')
  .addEventListener('click', () => window.location.reload());
document
  .querySelector('#submit-btn')
  .addEventListener('click', () => sendData());
