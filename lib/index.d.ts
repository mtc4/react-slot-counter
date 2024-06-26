import React from 'react';
import { Direction, SlotCounterRef, StartAnimationOptions, Value } from './types/common';
interface AnimateOnVisibleOptions {
    rootMargin?: string;
    triggerOnce?: boolean;
}
interface Props {
    value: Value;
    startValue?: Value;
    startValueOnce?: boolean;
    duration?: number;
    dummyCharacters?: string[] | JSX.Element[];
    dummyCharacterCount?: number;
    autoAnimationStart?: boolean;
    animateUnchanged?: boolean;
    hasInfiniteList?: boolean;
    containerClassName?: string;
    charClassName?: string;
    separatorClassName?: string;
    valueClassName?: string;
    sequentialAnimationMode?: boolean;
    useMonospaceWidth?: boolean;
    direction?: Direction;
    debounceDelay?: number;
    animateOnVisible?: boolean | AnimateOnVisibleOptions;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<SlotCounterRef>>>;
export default _default;
export type { SlotCounterRef, StartAnimationOptions };
