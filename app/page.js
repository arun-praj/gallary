'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useTransform, useScroll } from "framer-motion";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);
  const track = useRef(null)

  const imageRef = useRef([])
  const pushRef = el => imageRef.current.push(el)

  const wrapperRef = useRef(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray('.image')
    let each_section = gsap.to(sections, {
      xPercent: -70 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: 1,
        end: "+=3000"
      }
    })
    gsap.to('.mask', {
      width: "100%",
      scrollTrigger: {
        trigger: ".trapper",
        start: "top left",
        scrub: 1,
        end: "+=3000",
        markers: false
      }
    })
  }, { scope: wrapperRef })

  const handleOnDown = e => track.current.dataset.mouseDownAt = e.clientX;


  const handleOnUp = (e) => {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  }

  const handleOnMove = e => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained = parseFloat(track.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.current.dataset.percentage = nextPercentage;

    track.current.animate({
      transform: `translate(${nextPercentage}%, 0%)`
    }, { duration: 1200, fill: "forwards" });
    for (const image of imageRef.current) {
      image?.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }
  return (
    <main className="  flex flex-col min-h-screen font-playfair text-4xl  font-bold">
      <nav className=' flex flex-col items-center justify-center text-center h-36 border-b-2  tracking-widest'>
        <p>
          arun prajapati
        </p>
        <p className='  mt-2 text-base'>
          GALLARY
        </p>
      </nav>
      {/* <section className=' px-12 max-w-[1200px] mt-14 mx-auto  block  font-medium text-lg tracking-wide  '>
        <div className=' cursor-pointer hover:scale-105  duration-200  flex gap-14 justify-center max-h-[400px] overflow-clip'>
          <div className=' border-[2px] border-[#83c5be] shrink-0 h-[400px]  w-[400px] relative '>
            <Image className='object-cover object-top' src={'/img/mbc_cropped.jpg'} alt="image" fill />
          </div>
          <div className='max-w-[500px]'>

            <h1 className=' font-bold text-3xl tracking-wider'>
              Landscape
            </h1>
            <h2 className=' font-extralight text-[#6b705c]'>
              Sunday, 5 Feburary 23
            </h2>
            <p className='mt-5 font-sohne text-justify'>
              Cathetometric serenely in the Himalayas, Mardi Base Camp offers a tranquil view of Machapuchare Himalaya. The quiet majesty of the sacred peak paints a calming tableau against the sky. It&apos;s a gentle invitation to find solace in nature&apos;s simple wonders, where the soul can quietly appreciate the beauty that surrounds it
            </p>

            <div className='mt-4'>
              <a className='tracking-widest underline cursor-pointer '>Read More</a>
            </div>
          </div>
        </div>
        <div className='cursor-pointer hover:scale-105  duration-200 mt-28 flex flex-row-reverse gap-14 justify-center max-h-[400px] overflow-clip'>
          <div className=' border-[2px]  border-[#006d77] shrink-0 h-[400px] w-[400px] relative'>
            <Image className='object-cover' src={'/img/abc.jpg'} alt="image" fill />
          </div>
          <div className=' max-w-[500px]'>
            <h1 className=' font-bold text-3xl tracking-wider'>
              Annapurna Base Camp
            </h1>
            <h2 className=' font-extralight text-[#6b705c]'>
              Sunday, 5 Feburary 23
            </h2>
            <p className='mt-5  font-sohne  text-justify'>
              Nestled serenely in the Himalayas, Mardi Base Camp offers a tranquil view of Machapuchare Himalaya. The quiet majesty of the sacred peak paints a calming tableau against the sky. It&apos;s a gentle invitation to find solace in nature&apos;s simple wonders, where the soul can quietly appreciate the beauty that surrounds it
            </p>
            <div className='mt-4'>
              <a className='tracking-widest underline cursor-pointer '>Read More</a>
            </div>
          </div>
        </div>
      </section> */}
      <div ref={wrapperRef} className='wrapper overflow-x-hidden'>
        <div className='container min-w-[100vw] trapper'>

          <div className=' pt-28 min-w-[100vw]  '>
            <svg preserveAspectRatio="xMidYMin" className=' absolute left-1/2 translate-x-[-50%] w-[80vw]  md:w-[50vw]' viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />
              <mask className='w-0' id="mask0_0_1" style={{
                maskType: "alpha"
              }} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_0_1)">
                <rect className="mask" height="99" fill="black" />
              </g>
            </svg>
          </div>
          <section className='pt-14 min-w-[100vw]  '>
            <div ref={track} id='image-track' className='  flex gap-[4vmin]  absolute left-14   translate-x-0 select-none ' >
              {/* data-mouse-down-at="0" data-prev-percentage="0" onTouchStart={(e) => handleOnDown(e.touches[0])} onMouseUp={(e) => handleOnUp(e)} onMouseMove={(e) => handleOnMove(e)} onMouseDown={(e) => handleOnDown(e)}> */}
              <div className=' image h-[56vmin] w-[40vmin] relative'>
                <Image
                  ref={pushRef}
                  style={{
                    objectPosition: "100% center"
                  }}
                  draggable={"false"} className=' object-right object-cover '
                  src={'/img/mbc_tent.jpg'} alt="image" fill />
              </div>
              <div className='image h-[56vmin] w-[40vmin] relative'>
                <Image
                  ref={pushRef}
                  draggable={"false"} className=' object-right object-cover ' src={'/img/mbc_bw.jpeg'} alt="image" fill />
              </div>
              <div className='image h-[56vmin] w-[40vmin] relative'>
                <Image
                  ref={pushRef}
                  draggable={"false"} className=' object-right ' src={'/img/fivetalle.jpg'} alt="image" fill />
              </div>
              <div className='image h-[56vmin] w-[40vmin] relative'>
                <Image draggable={"false"} className='object-center object-cover ' src={'/img/papa.jpg'} alt="image" fill />
              </div>
              <div className='h-[56vmin] w-[40vmin] relative image'>
                <Image draggable={"false"} className='object-center object-cover ' src={'/img/mbc2.jpg'} alt="image" fill />
              </div>
              <div className='h-[56vmin] w-[40vmin] relative image'>
                <Image draggable={"false"} className='object-center object-cover ' src={'/img/moon.jpg'} alt="image" fill />
              </div>
              <div className='h-[56vmin] w-[40vmin] relative image'>
                <Image draggable={"false"} className='object-center object-cover ' src={'/img/mbc_cropped.jpg'} alt="image" fill />
              </div>
              <div className='h-[56vmin] w-[40vmin] relative image'>
                <Image draggable={"false"} className='object-center object-cover ' src={'/img/mbc_cropped.jpg'} alt="image" fill />
              </div>
              <div className='h-[56vmin] w-[40vmin] relative image'>
                <Image draggable={"false"} className='object-center object-cover ' src={'/img/mbc_cropped.jpg'} alt="image" fill />
              </div>

            </div>
          </section>
        </div>
      </div>

      <footer className='  h-[1000px] mt-[56vmin] w-screen min-h-12'>
        asdf
      </footer>
    </main>
  )
}
