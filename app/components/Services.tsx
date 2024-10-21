import Image from 'next/image';

const Services = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
        <Image
          src="/mobile.png"
          alt="mobile image"
          width={400}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="">
        <p className="text-orangeBold mb-4 font-semibold">System features</p>
        <h4 className="font-bold text-textColor mb-4 text-4xl">Powerful features</h4>
        <p className="text-textColor  mb-8">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div className="rounded-lg ">
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
