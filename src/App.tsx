import { ReactSVG } from 'react-svg'

function App() {

  return (
    <div className='flex flex-col justify-center items-center content-center w-full pt-[calc(10vh)]'>
      <ReactSVG className="w-60" src="logo.svg" />
      <ReactSVG className="w-1/2" src="name.svg" about="Roadmap.AI name" />
      <Road />
    </div>
  )
}
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Road: React.FC = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    // Set initial perspective and transformations
    gsap.set('.road', { perspective: 300 });
    gsap.set('.line', {
      transformOrigin: 'center top',
      rotationX: 58,
      rotationY: 2,
      scale: 0.25,
    });

    // Animation for the line
    gsap.to('.line', {
      rotationY: -2,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: 'power2.inOut',
    });

    // Animation for the divs inside line
    gsap.to('.line div', {
      y: -230,
      repeat: -1,
      duration: 0.8,
      ease: 'none',
    });
  }, []);

  return (
    <div className="flex content-center justify-center relative w-full h-[300px] overflow-hidden">
      <input className="absolute z-10 mt-6 px-6 py-3 bg-transparent border-2 border-[#80808020] rounded-full outline-none text-base w-80 placeholder-gray-400 placeholder-opacity-30"
        placeholder="I Wanna be [Dream] Within [X] Days ..."
        ref={inputRef} />
      <div className="w-[30px] h-full mx-auto road">
        <div className="line">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-[30px] h-[150px] mb-[80px] bg-[#ff8d0080]"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App