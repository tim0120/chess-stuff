// import got from 'got';
import axios from 'axios';

console.log('hello');
let usernames: string[] = ['tim0120', 'gmiller148', 'jmanyika', 'spencerlinbb', 'Akiva07', 'Dadd10', 'Rice_Cakes', 'CollinD727'];

let stats = usernames.forEach(
  async (user) => await axios.get('https://api.chess.com/pub/player/${user}/stats')
); 

// console.log(stats);

const tim_stats = axios.get('https://api.chess.com/pub/player/tim012');
// console.log(tim_stats);
