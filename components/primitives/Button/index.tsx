import React from 'react';
import { cn } from '~/utils/base';

export enum ButtonVariant {
  BLACK = 'black',
  WHITE = 'white',
}

type DEFINE_BUTTON_STYLE = {
  [key in ButtonVariant]: {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    hoverBackgroundColor: string;
  };
};

const DEFINE_BUTTON_STYLE: DEFINE_BUTTON_STYLE = {
  [ButtonVariant.BLACK]: {
    backgroundColor: '#000000',
    borderColor: '#ffffff',
    textColor: '#ffffff',
    hoverBackgroundColor: '#1a1a1a',
  },
  [ButtonVariant.WHITE]: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    textColor: '#000000',
    hoverBackgroundColor: '#cfcfcf',
  },
};

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  fullWidth = false,
  variant = ButtonVariant.BLACK,
  disabled = false,
  ...props
}) => {
  const styled = {
    '--background-color': DEFINE_BUTTON_STYLE[variant].backgroundColor,
    '--border-color': DEFINE_BUTTON_STYLE[variant].borderColor,
    '--text-color': DEFINE_BUTTON_STYLE[variant].textColor,
    '--hover-background-color': DEFINE_BUTTON_STYLE[variant].hoverBackgroundColor,
  } as React.CSSProperties;

  return (
    <button
      className={cn(
        'btn group relative flex items-center gap-[4px] cursor-pointer',
        {
          'w-full': fullWidth,
          'opacity-[0.32] cursor-not-allowed': disabled,
        },
        className
      )}
      disabled={disabled}
      style={{ ...styled, ...props.style }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
