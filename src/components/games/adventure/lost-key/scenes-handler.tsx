"use client";

import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import type { GameData, GameScene } from "@/games/types";
import { SetState } from "@/types";

interface GameSceneProps extends GameScene {
  setCurrentScene: SetState<string>;
}

export function GameScene(props: GameSceneProps) {
  const gameEnded = typeof props.end === "boolean" && props.end;

  return (
    <div className="flex flex-col gap__lg">
      <H3 gradient={gameEnded}>{props.description}</H3>
      {!gameEnded && (
        <div className="flex flex-col items-center justify-center gap__md lg:flex-row">
          {Array.isArray(props.choices) &&
            props.choices.map((choice) => (
              <Button
                key={choice.choice}
                variant="adventure"
                onClick={() => {
                  props.setCurrentScene(choice.nextScene);
                }}
              >
                {choice.choice}
              </Button>
            ))}
        </div>
      )}
    </div>
  );
}

interface LostKeyScenesHandlerProps {
  gameData: GameData;
  currentScene: string;
  setCurrentScene: SetState<string>;
}

export function LostKeyScenesHandler(props: LostKeyScenesHandlerProps) {
  const gameScene = props.gameData.scenes[props.currentScene];

  return (
    <>
      <GameScene {...gameScene} setCurrentScene={props.setCurrentScene} />
    </>
  );
}
