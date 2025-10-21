// Atoms - Basic building blocks

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Price Display Atom
export interface PriceDisplayProps {
  amount: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strikethrough?: boolean;
  className?: string;
}

export function PriceDisplay({ 
  amount, 
  currency = 'BRL', 
  size = 'md', 
  strikethrough = false,
  className 
}: PriceDisplayProps) {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(amount);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl font-bold'
  };

  return (
    <span 
      className={cn(
        sizeClasses[size],
        strikethrough && 'line-through text-gray-500',
        className
      )}
    >
      {formatted}
    </span>
  );
}

// Rating Display Atom
export interface RatingDisplayProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  className?: string;
}

export function RatingDisplay({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  showNumber = false,
  className 
}: RatingDisplayProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex gap-1">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              sizeClasses[size],
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-gray-200 text-gray-200"
            )} 
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600 ml-1">
          ({rating})
        </span>
      )}
    </div>
  );
}

// Badge Atom
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className 
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-purple-100 text-purple-800 border-purple-200',
    secondary: 'bg-gray-100 text-gray-800 border-gray-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}

// Icon Display Atom
export interface IconDisplayProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function IconDisplay({ icon, size = 'md', className }: IconDisplayProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  };

  return (
    <div className={cn(sizeClasses[size], className)}>
      {icon}
    </div>
  );
}

// CTA Button Atom
export interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function CTAButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  className 
}: CTAButtonProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white',
    secondary: 'bg-white text-purple-600 hover:bg-purple-50 border border-purple-200',
    outline: 'border-purple-300 text-purple-600 hover:bg-purple-50',
  };

  const buttonSize = size === 'xl' ? 'lg' : size === 'md' ? 'default' : size;

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      size={buttonSize}
      variant={variant === 'outline' ? 'outline' : 'default'}
      className={cn(
        variantClasses[variant],
        fullWidth && 'w-full',
        'font-bold transition-all duration-200',
        size === 'xl' && 'px-10 py-6 text-lg',
        className
      )}
    >
      {loading ? 'Carregando...' : children}
    </Button>
  );
}