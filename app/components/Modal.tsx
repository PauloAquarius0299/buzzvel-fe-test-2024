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
        {/* Círculo laranja */}
        <div
          className='absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[600px] bg-orange rounded-full z-0'
          style={{ top: '-70px', left: '-100px' }}
        ></div>

        {/* Círculo roxo */}
        <div
          className='absolute w-[150px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] bg-purple rounded-full z-0'
          style={{ top: '50px', right: '10px' }}
        ></div>

        <Image
          src={'/Desktop.png'}
          alt='desktop'
          width={1000}
          height={1000}
          className='relative z-10 shadow-md'
        />
      </div>
    </section>
  )
}

export default ModalSection;
