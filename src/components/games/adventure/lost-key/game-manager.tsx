"use client";

import { useEffect, useState } from "react";
import { LostKeyScenesHandler } from "./scenes-handler";
import { LostKeyIntro } from "./intro";
import { GameData } from "@/games/types";
import { readGameData } from "@/lib/read-game-data";

export function LostKeyGameManager() {
  const [gameData, setGameData] = useState<GameData>({} as GameData);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScene, setCurrentScene] = useState("");

  useEffect(() => {
    async function getGameData() {
      const gameData = await readGameData("lost-key");
      setGameData(gameData);
    }

    getGameData();
  }, []);

  return (
    <div>
      {gameStarted ? (
        <LostKeyScenesHandler
          gameData={gameData}
          currentScene={currentScene}
          setCurrentScene={setCurrentScene}
        />
      ) : (
        <LostKeyIntro
          gameData={gameData}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          setCurrentScene={setCurrentScene}
        />
      )}
    </div>
  );
}
