import { FC } from 'react';
import { ArrowRight } from 'lucide-react'; 

interface ButtonProps {
  variant: 'primary' | 'secondary'; 
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, onClick, children }) => {
  const baseStyles = 'px-4 py-2 flex items-center justify-center font-semibold border-2 rounded-md transition-all duration-300 shadow-md';

  const primaryStyles = 'text-purple border-purple hover:bg-purple hover:text-orange rounded-2xl active:bg-purple active:text-cyanOrange';
  const secondaryStyles = 'border-orange text-cyanOrange hover:bg-cyanOrange rounded-2xl hover:text-purple active:bg-orange active:text-purple';

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {children}
      <ArrowRight  size={16} className="ml-2" /> 
      </button>
  );
};

export default Button;
