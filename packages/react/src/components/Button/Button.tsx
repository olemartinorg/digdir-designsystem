import type { ReactNode } from 'react';
import React, { forwardRef, type ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import { SvgIcon } from '../SvgIcon';

import classes from './Button.module.css';

export const buttonSize = ['small', 'medium', 'large'] as const;
type ButtonSize_ = typeof buttonSize[number];

export const buttonColor = [
  'primary',
  'secondary',
  'success',
  'danger',
  'inverted',
] as const;
type ButtonColor_ = typeof buttonColor[number];

export const buttonVariant = ['filled', 'outline', 'quiet'] as const;
type ButtonVariant_ = typeof buttonVariant[number];

export type ButtonProps = {
  variant?: ButtonVariant_;
  color?: ButtonColor_;
  size?: ButtonSize_;
  fullWidth?: boolean;
  dashedBorder?: boolean;
  icon?: ReactNode;
  iconPlacement?: 'right' | 'left';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = 'primary',
      variant = 'filled',
      size = 'small',
      fullWidth = false,
      dashedBorder = false,
      iconPlacement = 'left',
      icon,
      type = 'button',
      className,
      ...restHTMLProps
    },
    ref,
  ) => (
    <button
      {...restHTMLProps}
      ref={ref}
      className={cn(
        classes.button,
        classes[size],
        classes[variant],
        classes[color],
        { [classes.fullWidth]: fullWidth },
        { [classes.dashedBorder]: dashedBorder },
        { [classes.onlyIcon]: !children && icon },
        className,
      )}
      type={type}
    >
      {icon && iconPlacement === 'left' && (
        <SvgIcon
          svgIconComponent={icon}
          className={classes.icon}
        />
      )}
      {children}
      {icon && iconPlacement === 'right' && (
        <SvgIcon
          svgIconComponent={icon}
          className={classes.icon}
        />
      )}
    </button>
  ),
);

Button.displayName = 'Button';
