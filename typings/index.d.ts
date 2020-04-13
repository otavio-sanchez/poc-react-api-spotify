declare function describe(description: string, specDefinitions: () => void): void;

declare function it(description: string, specDefinitions: () => void): void;

declare let expect: any;

declare module '*.svg' {
    import * as React from 'react';
    const value: React.FC<React.SVGAttributes<SVGElement>>;
    export default value;
}

declare module '*.woff' {
    const content: string;
    export default content;
}

declare module '*.ttf' {
    const content: string;
    export default content;
}

declare module '*.eot' {
    const content: string;
    export default content;
}

declare module '*.woff2' {
    const content: string;
    export default content;
}

declare module 'react-redux';
