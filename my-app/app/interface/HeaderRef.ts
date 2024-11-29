import { RefObject } from 'react'
import { IParallax } from '@react-spring/parallax';

export default interface HeaderRef {
    itemRef: RefObject<IParallax>,
}