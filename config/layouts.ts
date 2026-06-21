import { Layout } from 'react-grid-layout';

export const lgLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 1 },
    { i: 'linkedin',x: 2, y: 0, w: 1, h: 1  },
    { i: 'theme', x: 4, y: 0, w: 1, h: 1 },   
    { i: 'cv', x: 0, y: 2, w: 1, h: 1 },
    { i: 'article', x: 1, y: 2, w: 2, h: 1 },
    { i: 'github', x: 3, y: 2, w: 1, h: 1 },
    { i: 'spotify', x: 0, y: 3, w: 1, h: 1 },
    { i: 'project', x: 1, y: 2, w: 1, h: 1 },
    { i: 'contact', x: 2, y: 3, w: 2, h: 1 },
];

export const mdLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'github', x: 2, y: 2, w: 1, h: 1 },
    { i: 'linkedin', x: 2, y: 3, w: 1, h: 1 },
    { i: 'project', x: 4, y: 2, w: 1, h: 2 },
    { i: 'spotify', x: 0, y: 3, w: 2, h: 2 },
    { i: 'theme', x: 2, y: 3, w: 2, h: 1 },
    { i: 'cv', x: 4, y: 5, w: 2, h: 2 },
    { i: 'article', x: 0, y: 5, w: 2, h: 2 },
    { i: 'contact', x: 2, y: 7, w: 2, h: 2 },
];

export const smLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'github', x: 0, y: 3, w: 1, h: 1 },
    { i: 'theme', x: 0, y: 4, w: 1, h: 1 },
    { i: 'project', x: 1, y: 3, w: 1, h: 2 },
    { i: 'linkedin', x: 0, y: 5, w: 2, h: 1 },
    { i: 'spotify', x: 0, y: 6, w: 2, h: 2 },
    { i: 'cv', x: 0, y: 8, w: 2, h: 2 },
    { i: 'article', x: 0, y: 10, w: 2, h: 2 },
    { i: 'contact', x: 2, y: 11, w: 2, h: 2 },
];
