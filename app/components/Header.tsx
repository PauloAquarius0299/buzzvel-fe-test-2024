import { Headphones } from "lucide-react";
import Button from "./ui/Button";

const Header = () => {
  return (
    <nav >
      <div className="container mx-auto flex justify-between items-center p-4 px-2">
        <div className="flex items-center space-x-6"> 
          <span className="text-[32px] font-bold text-textColor">soller</span>
          <ul className="hidden md:flex space-x-6 ">
            <li>
              <a href="#" className="text-textColor font-semibold hover:text-purple transition-colors  duration-200">Products</a>
            </li>
            <li>
              <a href="#" className="text-textColor font-semibold hover:text-purple transition-colors duration-200">Solutions</a>
            </li>
            <li>
              <a href="#" className="text-textColor font-semibold hover:text-purple transition-colors duration-200">Services</a>
            </li>
            <li>
              <a href="#" className="text-textColor font-semibold hover:text-purple transition-colors duration-200">Configure</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-[#0369A1]">
            <Headphones className="mr-1" />
            <span>555 818 282</span>
          </div>
          <Button variant="primary">Request a Quote</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
