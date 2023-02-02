import axios from 'axios';

const usernames: string[] = ['tim012', 'gmiller148', 'jmanyika', 'spencerlinbb', 'Akiva07', 'Dadd10', 'Rice_Cakes', 'CollinD727'];

async function get_stats(username: string) {
  const stats = await axios.get(`https://api.chess.com/pub/player/${username}/stats`);
  if (stats.status == 200) {
    // console.log(stats.data.chess_blitz);
    return stats.data;
  } else {
    throw new Error('Invalid request');
  }
}

async function main() {
  const blitz_ratings = new Map<string, any>();
  await usernames.forEach(
    async (username) => {
      const stats = await get_stats(username);
      blitz_ratings.set(username, stats.chess_blitz.last.rating)
    }
  ); 
  console.log(blitz_ratings);
}

main();
