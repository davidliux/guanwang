import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg p-6 shadow-md',
        {
          'hover:shadow-xl transition-shadow duration-300': hover,
        },
        className
      )}
    >
      {children}
    </div>
  );
}