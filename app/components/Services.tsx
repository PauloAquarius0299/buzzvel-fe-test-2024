import Image from 'next/image';

const Services = () => {
  return (
    <section className='py-10'>
      <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-center">
      <div className="">
          <Image
            src="/mobile.png"
            alt="mobile image"
            width={400}
            height={200}
            
          />
        </div>
        <div className="md:w-1/2 order-2 md:order-1">
          <p className="text-orangeBold mb-4 font-semibold">Services</p>
          <h4 className="font-bold text-textColor mb-4 text-4xl">Personalized services</h4>
          <p className="text-textColor mb-8">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          {/* Agrupando as frases */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Et mauris</span>
              <p className="text-textColor">
                Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
              </p>
            </div>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Erat sit</span>
              <p className="text-textColor">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Imperdiet pellentesque</span>
              <p className="text-textColor">
                Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
              </p>
            </div>
            <div className="rounded-lg">
              <span className="block font-semibold text-lg mb-2">Non Libero</span>
              <p className="text-textColor">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
