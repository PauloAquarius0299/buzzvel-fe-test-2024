import Button from "./ui/Button";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='p-10'>
      <div className='flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 px-10'>
        <div className='md:hidden mb-4'>
          <Image 
            src="/vector-mask.png" 
            alt='gustavo'
            width={500} 
            height={500} 
            quality={100} 
            className="rounded-full border-4 border-[#BAE6FD] shadow-lg object-cover"
          />
        </div>

        <div className='space-y-6 text-center md:text-left'>
          <h1 className='text-textColor text-4xl font-bold md:text-6xl'>Get the Sun to <br></br> Power Your Home</h1>
          <p className='text-textColor mt-2 text-lg md:text-xl'>Viverra viverra nibh enim et aliquam, enim. Tempor, sit <br></br> mus viverra orci dui consequat turpis scelerisque.</p>
          <Button variant='primary'>Request a Quote</Button>
          <div className='mt-8'>
            <div className='mt-20'>
              <p>
                "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci <br /> consequat turpis scelerisque."
              </p>
              <div className="flex items-center mt-4">
                <Image
                  src='/user-thumb.png'
                  alt='user thumb'
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <div>
                  <p className='font-semibold'>Rwanda Melflor</p>
                  <span className='text-greyText'>zerowast.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:block bg-[#bae6fd] rounded-full'>
          <Image 
            src="/vector-mask.png" 
            alt='gustavo'
            width={500} 
            height={500} 
            quality={100} 
            className="rounded-full border-4 border-[#BAE6FD] bg-[#bae6fd] shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;