import Image from 'next/image'

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
        
        <div className='absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-orange rounded-full z-0' 
          style={{ top: '-70px', left: '-100px' }}>
        </div>

        
        <div className='absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-purple rounded-full z-0' 
          style={{ top: '50px', right: '10px' }}>
        </div>

        
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
