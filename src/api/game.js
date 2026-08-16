const API_URL = import.meta.env.VITE_API_URL;

async function startSession() {
  const res = await fetch(`${API_URL}/session`, { method: 'POST' });
  const data = await res.json();
  localStorage.setItem('session_id', data.session_id);
  localStorage.setItem('game_id', data.game_id);
  return data; // { session_id, game_id, length, games_played, games_limit }
}

async function sendGuess(guess) {
  const session_id = localStorage.getItem('session_id');
  const game_id = Number(localStorage.getItem('game_id'));

  const res = await fetch(`${API_URL}/guess`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id, game_id, guess }),
  });
  const data = await res.json();

  if (data.next_game) {
    localStorage.setItem('game_id', data.next_game.game_id);
  }
  return data; // { result, is_win, is_game_over, answer, next_game, locked }
}

export { startSession, sendGuess };
