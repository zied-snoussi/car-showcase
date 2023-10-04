"use client"

import React from 'react'
import { Button } from '.'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book, or rent a car --quickly and easily!
                </h1>
                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortiess booking process
                </p>
                <Button
                    title="Explore Cars"
                    btnType='button'
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className='hero__image'>
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className='object-contain' />
                </div>
                <div className='hero__image-overlay'>
                    <Image
                        src="/hero-bg.png"
                        alt="hero"
                        fill
                        className='object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Hero