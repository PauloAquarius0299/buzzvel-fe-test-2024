import Image from 'next/image'
import React from 'react'

const ModalSection = () => {
  return (
    <section className='relative flex flex-col text-center justify-center px-4 py-6'>
      <div className='text-center py-2 space-y-4'>
        <p className='text-orangeBold mb-4 font-semibold'>No more waste</p>
        <h2 className='font-bold text-textColor text-4xl'>Pick the Sun</h2>
        <p className='text-textColor'>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar <br /> 
          purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>

      <div className="relative flex justify-center items-center mt-10">
        {/* Círculo laranja (aumentado) */}
        <div className='absolute w-[600px] h-[600px] bg-orange rounded-full z-0' style={{ top: '-150px', left: '-200px' }}></div>

        {/* Círculo roxo (aumentado e movido para baixo) */}
        <div className='absolute w-[450px] h-[450px] bg-purple rounded-full z-0' style={{ top: '2px', right: '30px' }}></div>

        {/* Imagem centralizada */}
        <Image
          src={'/Desktop.png'}
          alt='desktop'
          width={1000}  
          height={1000}  
          className='relative z-10'
        />
      </div>
    </section>
  )
}

export default ModalSection;
