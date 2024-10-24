'use client'
import { useAnimation, motion } from "framer-motion";
import Button from "./ui/Button";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useEffect } from "react";

const Hero = () => {
  const textControls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      textControls.start({ opacity: 0, y: 50 });
    }
  }, [textControls, inView]);

  
  const floatAnimation = {
    y: [0, -20, 0], 
    transition: {
      duration: 10, 
      ease: "easeInOut", 
      repeat: Infinity, 
    },
  };

  return (
    <section className="p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 px-10">
        <motion.div
          animate={floatAnimation} 
          className="md:hidden mb-4"
        >
          <Image
            src="/vector-mask.png"
            alt="gustavo"
            width={500}
            height={500}
            quality={100}
            className="rounded-full border-4 border-[#BAE6FD] bg-[#bae6fd] shadow-lg object-cover"
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={textControls}
          initial={{ opacity: 0, y: 50 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-textColor text-4xl font-bold md:text-6xl">
            Get the Sun to <br /> Power Your Home
          </h1>
          <p className="text-textColor mt-2 text-lg md:text-xl">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit <br />
            mus viverra orci dui consequat turpis scelerisque.
          </p>
          <Button variant="primary">Request a Quote</Button>
          <div className="mt-8">
            <div className="mt-20">
              <p>
                "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci <br />
                consequat turpis scelerisque."
              </p>
              <div className="flex items-center mt-4">
                <Image
                  src="/user-thumb.png"
                  alt="user thumb"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <div>
                  <p className="font-semibold">Rwanda Melflor</p>
                  <span className="text-greyText">zerowast.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={floatAnimation}
          className="hidden md:block bg-[#bae6fd] rounded-full"
        >
          <Image
            src="/vector-mask.png"
            alt="gustavo"
            width={500}
            height={500}
            quality={100}
            className="rounded-full border-4 border-[#BAE6FD] bg-[#bae6fd] shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
