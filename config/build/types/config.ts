export type BuildModeType = 'production' | 'development';
export type BuildPathsType = {
    entry: string;
    build: string;
    html: string;
};

export type BuildEndType = {
    mode: BuildModeType;
    port: number;
};

export type BuildOptionsType = {
    mode: BuildModeType;
    paths: BuildPathsType;
    isDevMode: boolean;
    port: number;
};