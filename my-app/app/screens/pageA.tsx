'use client'

import { useState } from 'react';
import StaticHeader from '../components/staticHeader'
import style from '../styles/pageA.module.css'

import localFont from "next/font/local";
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';


export default function PageA() {

    return (
        <div className={style.container}>
            <StaticHeader/>
        </div>
    )
}