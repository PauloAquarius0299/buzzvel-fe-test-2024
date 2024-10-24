'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Services = () => {
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
    <section className="py-10">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-center">
        <motion.div
          ref={ref}
          animate={imageControls}
          initial={{ opacity: 0, y: -50 }} 
          className="md:w-1/2"
        >
          <Image
            src="/mobile.png"
            alt="mobile image"
            width={400}
            height={200}
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={textControls}
          initial={{ opacity: 0, y: 50 }} 
          className=" p-10 py-20"
        >
          <p className="text-orangeBold mb-4 font-semibold">Services</p>
          <h4 className="font-bold text-textColor mb-4 text-4xl">Personalized services</h4>
          <p className="text-textColor mb-8">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
             ref={ref}
             animate={textControls}
             initial={{ opacity: 0, y: 100 }} 
            className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Et mauris</span>
              <p className="text-textColor">
                Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
              </p>
            </motion.div>
            <motion.div 
            ref={ref}
            animate={textControls}
            initial={{ opacity: 0, y: 100 }}
            className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </motion.div>
            <motion.div 
            ref={ref}
            animate={textControls}
            initial={{ opacity: 0, y: 100 }}
            className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Imperdiet pellentesque</span>
              <p className="text-textColor">
                Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
              </p>
            </motion.div>
            <motion.div 
            ref={ref}
            animate={textControls}
            initial={{ opacity: 0, y: 100 }}
            className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Non Libero</span>
              <p className="text-textColor">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
