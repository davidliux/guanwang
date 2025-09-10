import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  loading = false,
  disabled,
  children,
  className,
  ...props 
}: ButtonProps) {
  // 变体样式映射
  const variantStyles = {
    primary: 'bg-primary-oxford hover:bg-primary-seashore text-white shadow-lg hover:shadow-xl',
    accent: 'bg-accent-banana hover:bg-accent-hover text-dark-wash font-bold shadow-lg hover:shadow-[0_0_30px_rgba(243,255,72,0.5)]',
    ghost: 'bg-transparent hover:bg-white/10 text-white',
    outline: 'border-2 border-accent-banana text-accent-banana hover:bg-accent-banana hover:text-dark-wash'
  };

  // 尺寸样式映射
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        // 基础样式
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
        'focus:outline-none focus:ring-2 focus:ring-accent-banana focus:ring-offset-2 focus:ring-offset-dark-wash',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        // 变体样式
        variantStyles[variant],
        // 尺寸样式
        sizeStyles[size],
        // 全宽样式
        fullWidth && 'w-full',
        // 自定义样式
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}