import "./ScoreBoard.scss";
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const initialState = [
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
    { id: 5, name: "Andre", score: 30 },
    { id: 6, name: "Zara", score: 20 },
  ];
  const [players, setPlayers] = useState(initialState);
  const [sort_by, set_sort_by] = useState("score");

  const players_sorted = [...players].sort(
    sort_by === "score" ? compare_score : compare_name
  );

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    setPlayers(new_players_array);
  };

  const resetScores = () => {
    const new_players_array = players.map((player) => {
      return {
        ...player,
        score: 0,
      };
    });
    setPlayers(new_players_array);
  };

  const randomScore = () => {
    const new_players_array = players.map((player) => {
      return {
        ...player,
        score: Math.floor(Math.random() * 101),
      };
    });
    setPlayers(new_players_array);
  };

  const addPlayer = (playerName) => {
    const newPlayer = {
      id: Math.floor(Math.random() * 1000),
      name: playerName,
      score: 0,
    };
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScores}>Reset</button>
      <button onClick={randomScore}> Random Scores</button>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
