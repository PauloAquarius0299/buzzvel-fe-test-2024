import Image from "next/image";
import Button from "./ui/Button";

const Desktop = () => {
  return (
    <section className='bg-purple p-20 overflow-hidden'>
      <div className='container mx-auto px-4 flex justify-between items-start flex-col md:flex-row'>
        <div className='space-y-4 flex-1 text-center md:text-left'>
          <p className='text-cyanOrange font-bold'>
            Get the Sun to power your home
          </p>
          <h2 className='text-white font-bold text-3xl md:text-5xl'>
            All the power that you need for  <br /> your house is now available
          </h2>
        </div>

        {/* Círculo apenas no desktop (escondido em mobile) */}
        <div className='relative hidden md:block'>
          <div className='bg-cyanPurple rounded-full w-[38rem] h-[38rem] flex flex-col items-center justify-center absolute top-[-280px] right-[-240px]'>
            <div className='mt-40'> 
              <Button variant='secondary'>Request a Quote</Button>
              <p className='text-white mt-4'>Egestas fringilla aliquam leo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botão centralizado em mobile */}
      <div className='flex justify-center mt-10 md:hidden'>
        <Button variant='secondary'>Request a Quote</Button>
      </div>

      
      <Image
        src={'/Macbook.png'}
        alt='macbook'
        width={800}
        height={600}
        className='mt-10 mx-auto'
      />
    </section>
  );
};

export default Desktop;
