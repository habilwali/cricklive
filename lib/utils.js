import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

 export const convertToNextInteger = (number) => {
  const decimalPart = number - Math.floor(number);
  // Check if decimal part is greater than or equal to 0.6
  if (decimalPart >= 0.6) {
    return Math.ceil(number);
  } else {
    return number; // Return the original number without rounding
  }
};

export const addLineBreaks = (text) => {
  return text.split('\\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

