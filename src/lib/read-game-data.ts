"use server";

import { GameData } from "@/games/types";
import { withTryCatch } from "@/utils/with-try-catch";
import * as fsPromises from "fs/promises";
import * as path from "path";

export async function readGameData(game: string): Promise<GameData> {
  const filePath = path.join(process.cwd(), `src/games/data/${game}.json`);

  const result = await withTryCatch(async () => {
    const gameData = await fsPromises.readFile(filePath, "utf8");
    return JSON.parse(gameData);
  });

  if (!result.success) {
    console.log(result.error);
    return {} as GameData;
  }

  return result.data;
}
