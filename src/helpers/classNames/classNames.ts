
type ModsType = {
    [cls: string]: string | boolean
}

export function classNames(cls: string, mods: ModsType, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => value)
            .map(([className, value]) => className)
    ].join(' ');
}