import axios from 'axios';

const usernames: string[] = ['tim012', 'gmiller148', 'jmanyika', 'spencerlinbb', 'Akiva07', 'Dadd10', 'Rice_Cakes', 'CollinD727'];

async function get_stats(username: string) {
  try {
    const stats_endpoint = `https://api.chess.com/pub/player/${username}/stats`;
    const stats = await axios.get(stats_endpoint);
    if (stats.status == 200) {
      return stats.data;
    } else {
      console.log(`request for ${username} gave status ${stats.status}`);
    }
  } catch (error) { 
    console.log(`chess.com did not like the request for ${username}`);
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
}

main();
