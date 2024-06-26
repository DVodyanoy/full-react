import React from 'react';

declare const __IS_DEV__: boolean;

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    const svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default svg;
}
