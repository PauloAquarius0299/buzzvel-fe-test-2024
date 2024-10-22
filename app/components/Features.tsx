import Image from 'next/image';

const Features = () => {
  return (
    <section className='py-10'>
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='flex-1 px-4 md:px-10'>
          <p className="text-orangeBold mb-8 font-semibold">System features</p>
          <h4 className="font-bold text-textColor mb-4 text-4xl">Powerful features</h4>
          <p className="text-textColor ">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </div>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </div>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </div>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </div>
          </div>
        </div>

        <div className=''>
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
