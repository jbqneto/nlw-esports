import axios from "axios";
import { Game } from "../generated/games";

const BASE_URL = 'http://localhost:8080';

export interface PostGame {
    discord: string;
    game_id: number;
    hour_end: string;
    hour_start: string;
    name: string;
    use_voice_channel: boolean;
    years_playing: number,
    week_days: string[];
}

export const client = {
    getGames(): Promise<any[]> {
        return axios(`${BASE_URL}/games`).then((response) => response.data);
    },
    postAd(ad: PostGame): Promise<void> {
        return axios.post(BASE_URL + '/ads', ad);
    }
}