export type LayoutParams<T extends Record<string, string | string[]> = {}> = {
    params: T;
    children: React.ReactNode;
};

export type PageParams<T extends Record<string, string | string[]> = {}> = {
    params: T;
    searchParams: { [key: string]: string | string[] | undefined };
};

export type ErrorParams = {
    error: Error & { digest?: string };
    reset: () => void;
};
