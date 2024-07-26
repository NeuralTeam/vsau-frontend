import { createStore } from "zustand/vanilla";
import { IListPost } from "@/shared/ui/vsau/posts/post-list-block";

export type CounterState = {
    count: number;
    posts: IListPost[];
};

export type CounterActions = {
    decrementCount: () => void;
    incrementCount: (type: number) => void;
    setPosts: (posts: IListPost[]) => void;
    fetch: (param: string) => Promise<void>;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
    count: 0,
    posts: []
};

export const createCounterStore = (initState: CounterState = defaultInitState) => {
    return createStore<CounterStore>()((set) => ({
        ...initState,
        decrementCount: () => set((state) => ({ count: state.count - 1 })),
        incrementCount: (type: number) => set((state) => ({ count: type })),
        setPosts: (posts: IListPost[]) => set((state) => ({ posts: posts })),
        fetch: async (param: string) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/posts?type=1&${param}`);
            set({ posts: await response.json() });
        }
    }));
};
