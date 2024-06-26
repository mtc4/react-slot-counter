/// <reference types="react" />
import { Value } from './types/common';
export declare const mergeClassNames: (...args: (string | null | undefined)[]) => string;
export declare const range: (start: number, end: number) => number[];
export declare const generateCyclicRange: (start: number, end: number) => number[];
export declare const random: (min: number, max: number) => number;
export declare const shuffle: (arr: (number | string | JSX.Element)[]) => (string | number | JSX.Element)[];
export declare const toNumeric: (value: string | string[] | number) => string | number;
export declare const isNumeric: (value: Value) => value is string | number | string[];
export declare const isJSXElement: (value: string | number | JSX.Element) => value is JSX.Element;
export declare const isJSXElementArray: (value: Value) => value is JSX.Element[];
