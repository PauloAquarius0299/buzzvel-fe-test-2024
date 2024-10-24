'use client';

import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Features = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
      imageControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      textControls.start({ opacity: 0, y: 50 });
      imageControls.start({ opacity: 0, y: -50 });
    }
  }, [textControls, imageControls, inView]);

  return (
    <section className='py-10'>
      <div className='flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-start'>
        <motion.div
          ref={ref}
          animate={textControls}
          initial={{ opacity: 0, y: 50 }}
          className='flex-1 px-4 md:px-10 order-1 md:order-1'
        >
          <p className="text-orangeBold mb-8 font-semibold">System features</p>
          <h4 className="font-bold text-textColor mb-4 text-4xl">Powerful features</h4>
          <p className="text-textColor">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          <div className='grid grid-cols-2 gap-4 mt-10'>
            <motion.div
              ref={ref}
              animate={textControls}
              initial={{ opacity: 0, y: 100 }}
              className="rounded-lg"
            >
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              animate={textControls}
              initial={{ opacity: 0, y: 100 }}
              className="rounded-lg"
            >
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              animate={textControls}
              initial={{ opacity: 0, y: 100 }}
              className="rounded-lg"
            >
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              animate={textControls}
              initial={{ opacity: 0, y: 100 }}
              className="rounded-lg"
            >
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className='order-2 md:order-2 mt-8 md:mt-0'>
          <Image
            src={'/mobile-2.png'}
            alt='mobile 2'
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
