"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { GameData } from "@/games/types";
import { SetState } from "@/types";

interface LostKeyIntroProps {
  gameData: GameData;
  gameStarted: boolean;
  setGameStarted: SetState<boolean>;
  setCurrentScene: SetState<string>;
}

export function LostKeyIntro(props: LostKeyIntroProps) {
  return (
    <section className="flex flex-col gap__sm font-roboto">
      <Typography.H1 gradient={true}>{props.gameData.title}</Typography.H1>
      <Typography.P className="max-w-lg">{props.gameData.intro}</Typography.P>
      <div className="flex items-center justify-center gap__md">
        {Array.isArray(props.gameData.startingChoices) &&
          props.gameData.startingChoices.map((choice) => (
            <div key={choice.choice}>
              <Button
                onClick={() => {
                  props.setGameStarted(true);
                  props.setCurrentScene(choice.nextScene);
                }}
              >
                {choice.choice}
              </Button>
            </div>
          ))}
      </div>
    </section>
  );
}
