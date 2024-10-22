'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 
import Image from 'next/image';
import { ClientsData } from '@/app/data/clients';

export function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [AutoScroll({ speed: 4 })]  
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
  
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
  
    emblaApi.on('select', onSelect);
    onSelect();
  
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla relative p-8">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {ClientsData.map((client, index) => (
            <div key={index} className="embla__slide flex justify-center items-center">
              <div className="bg-whiteSlider p-6 rounded-lg shadow-lg max-w-xs mx-4">
                <p className="text-textColor mb-4 text-center">{client.description}</p>
                <div className='flex items-center justify-center'>
                  <div className="flex-shrink-0">
                    <Image
                      src={client.img}
                      alt={client.name}
                      width={100}
                      height={100}
                      className="w-15 h-15 rounded-2xl md:w-16 md:h-16 object-cover"
                    />
                  </div>
                  <div className="ml-4 text-center">
                    <h3 className="font-bold">{client.name}</h3>
                    <p className=" text-greyText">{client.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:absolute left-4 space-x-2 mt-6 items-center transform -translate-y-2">
        <button 
          className="p-2 text-cyanOrange border border-cyanOrange hover:bg-cyanOrange hover:text-purpleBold rounded-full mb-2" 
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          className="p-2 text-cyanOrange border border-cyanOrange hover:bg-cyanOrange hover:text-purpleBold rounded-full"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
