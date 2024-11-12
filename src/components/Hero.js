'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './Hero.css'
import Nav from './Nav.js'



export default function Hero() {


  return (
    <div className="bg-white custom-background ">
        <Nav/>
    <div class="grid max-w-screen-xl px-12 py-12 sm mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center sm:text-left ">
        <div class="mr-auto place-self-center lg:col-span-7 pb-16">
            <p class="max-w-2xl mb-6 font-medium tracking-wide text-white lg:mb-8 md:text-lg lg:text-xlfont-sans">RENEW YOUR LOOK</p>
            <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-wide leading-none md:text-5xl xl:text-6xl dark:text-white">A TRADITION OF QUALITY CLEANING</h1>
            
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-normal text-center text-gray-900 border border-white-300 rounded-lg  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white-700  dark:focus:ring-gray-800 tracking-wide">
                Contact Us
            </a> 
        </div>
                       
    </div>
    </div>
  )
}
