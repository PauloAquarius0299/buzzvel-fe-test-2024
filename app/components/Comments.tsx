import Button from './ui/Button';
import { Slider } from './ui/Slider';

const Comments = () => {
  return (
    <section className='py-10 px-4 md:px-10 bg-purpleBold'>
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='flex-1 text-center md:text-left'> 
          <p className="text-cyanOrange mb-4 font-semibold">Join other Sun harvesters</p>
          <h4 className="font-bold text-white space-y-6 text-4xl">Make something awesome</h4>
          <p className="text-white mt-8">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique <br />
            condimentum congue fusce nunc, donec magnis commodo.
          </p>
        </div>

        <div className='mt-6 md:mt-14 flex justify-center md:justify-start '> 
          <Button variant='secondary'>Request a Quote</Button>
        </div>
      </div>

      <div className='flex text-center justify-center mt-6 md:mt-26 '>
        <Slider />
      </div>
    </section>
  );
};

export default Comments;
