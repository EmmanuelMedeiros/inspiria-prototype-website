import { Dispatch, RefObject, SetStateAction } from 'react'
import { IParallax } from '@react-spring/parallax';
import PageSection from '../enum/PageSection';

export default interface HeaderRef {
    itemRef: RefObject<IParallax>,
    setOpenedMenu?: Dispatch<SetStateAction<boolean>>
}