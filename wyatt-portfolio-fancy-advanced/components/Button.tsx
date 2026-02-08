import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'outline' | 'filled';
  color?: 'blue' | 'black' | 'white' | 'orange';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'outline', 
  color = 'orange', 
  className = "",
  onClick 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm md:text-base transition-all duration-300 border border-[0.7px]";
  
  let colorClasses = "";
  
  if (variant === 'outline') {
    if (color === 'blue') colorClasses = "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";
    if (color === 'orange') colorClasses = "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white";
    if (color === 'black') colorClasses = "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white";
    if (color === 'white') colorClasses = "border-white text-white hover:bg-white hover:text-black";
  } else {
    if (color === 'blue') colorClasses = "bg-blue-600 text-white border-blue-600 hover:bg-blue-700";
    if (color === 'orange') colorClasses = "bg-orange-600 text-white border-orange-600 hover:bg-orange-700";
    if (color === 'black') colorClasses = "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800";
    if (color === 'white') colorClasses = "bg-white text-black border-white hover:bg-gray-100";
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${colorClasses} ${className}`}>
      {label}
    </button>
  );
};