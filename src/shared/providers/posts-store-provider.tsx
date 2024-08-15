"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { PostsState, type PostsStore, createPostsStore } from "@/shared/stores/posts-store";

export const PostsStoreContext = createContext<StoreApi<PostsStore> | null>(null);

export interface CounterStoreProviderProps {
    children: ReactNode;
    initState: PostsState;
}

export const CounterStoreProvider = ({ children, initState }: CounterStoreProviderProps) => {
    const storeRef = useRef<StoreApi<PostsStore>>();
    if (!storeRef.current) {
        storeRef.current = createPostsStore(initState);
    }

    return <PostsStoreContext.Provider value={storeRef.current}>{children}</PostsStoreContext.Provider>;
};

export const usePostsStore = <T,>(selector: (store: PostsStore) => T): T => {
    const postsStoreContext = useContext(PostsStoreContext);

    if (!postsStoreContext) {
        throw new Error(`usePostsStore must be use within CounterStoreProvider`);
    }

    return useStore(postsStoreContext, selector);
};
