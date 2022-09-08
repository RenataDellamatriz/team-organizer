import axios from "axios";

export async function getAllChampions() {
  const { data } = await axios.get(
    "http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json"
  );
  const champions = data.data;

  return Object.keys(champions);
}
