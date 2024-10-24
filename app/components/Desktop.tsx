'use client'

import Image from "next/image";
import Button from "./ui/Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Desktop = () => {

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const circleControls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if(inView){
      textControls.start({
        opacity: 1,
        y: 0,
        transition: {duration: 1, ease: 'easeOut'},
      });
      imageControls.start({
        opacity: 1,
        y: 0,
        transition: {duration: 1, ease: 'easeOut'},
      });
      circleControls.start({
        opacity: 1,
        y: 0,
        transition: {duration: 1, ease: 'easeOut'},
      });
    } else {
      textControls.start({opacity: 0, y: 50});
      imageControls.start({opacity: 0, y: 50});
      circleControls.start({opacity: 0, y: -50});
    }
  }, [textControls, imageControls, circleControls, inView]);

  return (
    <section className='bg-purple p-20 overflow-hidden'>
      <div className='container mx-auto px-4 flex justify-between items-start flex-col md:flex-row'>
        <motion.div 
        ref={ref}
        animate={textControls}
        initial={{ opacity: 0, y: 50 }}
        className='space-y-4 flex-1 text-center md:text-left'>
          <p className='text-cyanOrange font-bold'>
            Get the Sun to power your home
          </p>
          <h2 className='text-white font-bold text-3xl md:text-5xl'>
            All the power that you need for  <br /> your house is now available
          </h2>
        </motion.div>
        <div className='relative hidden md:block'>
          <motion.div
          ref={ref}
          animate={circleControls}
          initial={{ opacity: 0, y: -50 }}
          className='bg-cyanPurple rounded-full w-[38rem] h-[38rem] flex flex-col items-center justify-center absolute top-[-280px] right-[-240px]'>
            <div className='mt-40'> 
              <Button variant='secondary'>Request a Quote</Button>
              <p className='text-white mt-4'>Egestas fringilla aliquam leo</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center mt-10 md:hidden'>
        <Button variant='secondary'>Request a Quote</Button>
      </div>
      <motion.div
      ref={ref}
      animate={imageControls}
      initial={{ opacity: 0, y: 50 }}
      >
        <Image
          src={'/Macbook.png'}
          alt='macbook'
          width={800}
          height={600}
          className='mt-10 mx-auto'
        />
      </motion.div>
    </section>
  );
};

export default Desktop;
