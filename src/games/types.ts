export interface GameChoice {
  choice: string;
  nextScene: string;
}

export interface GameScene {
  description: string;
  choices?: GameChoice[];
  items?: string[];
  end?: boolean;
}

export interface GameData {
  title: string;
  intro: string;
  startingChoices: GameChoice[];
  progressPath: string[];
  scenes: Record<string, GameScene>;
}
