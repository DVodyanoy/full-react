type ModsType = Record<string, string | boolean>;

export function classNames(cls: string, mods: ModsType = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([className]) => className)
    ].join(' ');
}