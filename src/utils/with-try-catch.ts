import { AsyncFunc } from "@/types";

export type TryCatchResult<T, E = unknown> =
  | { success: true; data: T }
  | { success: false; error: E };

export async function withTryCatch<T, E = unknown>(
  fn: AsyncFunc<T>,
  ...args: Parameters<AsyncFunc<T>>
): Promise<TryCatchResult<T, E>> {
  try {
    const data = await fn(...args);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error as E };
  }
}
