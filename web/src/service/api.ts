const BASE_URL = 'http://localhost:8080';

export const client = {
    getGames(): Promise<any[]> {
        return fetch(`${BASE_URL}/games`).then((response) => response.json());
    }
}