export type AsyncFunc<T> = (...args: unknown[]) => Promise<T>;

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
