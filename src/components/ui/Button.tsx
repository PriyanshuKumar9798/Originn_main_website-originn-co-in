import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  showArrow?: boolean
  asChild?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  showArrow = false,
  asChild = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200 shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-200 border border-slate-300',
    outline: 'bg-transparent text-slate-700 border-2 border-slate-300 hover:bg-slate-50 focus:ring-slate-200'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5'
  }
  
  const arrowSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (asChild) {
    return (
      <div className={buttonClasses}>
        {children}
        {showArrow && (
          <ArrowUpRight className={arrowSize} />
        )}
      </div>
    )
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className={arrowSize} />
      )}
    </button>
  )
}
