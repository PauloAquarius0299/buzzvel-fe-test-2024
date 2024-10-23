import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
          <Image 
            src={'/Logo-grey.png'}
            alt='logo'
            width={100}
            height={100}
            className="md:w-auto"  
          />
          <p className="text-center md:text-left">
            © 2023 Soller, Inc. All rights reserved.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">Terms</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
