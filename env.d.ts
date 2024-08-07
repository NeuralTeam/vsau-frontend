declare namespace NodeJS {
    interface ProcessEnv {
        VERSION: string;
        REVALIDATION_TOKEN: string;
        NEXT_PUBLIC_DOMAIN: string;
        NEXT_PUBLIC_API_DOMAIN: string;
    }
}
