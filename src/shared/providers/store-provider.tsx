"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type CounterStore, createCounterStore } from "@/stores/counter-store";
import { IListPost } from "@/shared/ui/vsau/posts/post-list-block";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(undefined);

export interface CounterStoreProviderProps {
    children: ReactNode;
    posts: IListPost[];
    count: number;
}

export const StoreProvider = ({ children, posts, count }: CounterStoreProviderProps) => {
    const storeRef = useRef<CounterStoreApi>();
    if (!storeRef.current) {
        storeRef.current = createCounterStore({
            count: count,
            posts: posts
        });
    }

    return <CounterStoreContext.Provider value={storeRef.current}>{children}</CounterStoreContext.Provider>;
};

export const useCounterStore = <T,>(selector: (store: CounterStore) => T): T => {
    const counterStoreContext = useContext(CounterStoreContext);

    if (!counterStoreContext) {
        throw new Error(`useCounterStore must be used within CounterStoreProvider`);
    }

    return useStore(counterStoreContext, selector);
};
