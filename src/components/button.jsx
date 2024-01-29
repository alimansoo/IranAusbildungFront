import React from 'react';
import { objectConvert } from '../util/functions';

const buttonStyles = {
  primary: {
    background: 'bg-primary-default hover:bg-primary-50',
    color: 'text-white',
  },
  secondary: {
    border: 'border-[1px] border-primary-default',
    color: 'text-gray-700',
    background: 'bg-transparent hover:bg-primary-0',
  },
  grey: {
    border: '',
    color: 'text-dark',
    background: 'bg-gray-200',
  },
  yellow: {
    background: 'bg-yellow-default',
    color: 'text-gray-600',
  },
  textonly: {
    background: 'bg-transparent hover:bg-gray-100',
    color: 'text-gray-700'
  }
}

const buttonSizes = {
  small: {
    height: 'h-[36px]',
    padding: 'px-3',
    fontSize: 'text-sm',
    gap: 'gap-1',
  },
  medium: {
    height: 'h-[42px]',
    padding: 'px-5',
    fontSize: 'text-base',
    gap: 'gap-2',
  },
  large: {
    height: 'h-[50px]',
    padding: 'px-7',
    fontSize: 'text-lg',
    gap: 'gap-2',
  },
}

const iconSizes = {
  small: 'w-[20px] h-[20px]',
  medium: 'w-[24px] h-[24px]',
  large: 'w-[28px] h-[28px]',
}

function Button({
  type = 'button',
  size = 'medium',
  styleVariant = 'primary',
  onClick = () => {
    return
  },
  disabled = false,
  className = '',
  children,
  rightIcon,
  leftIcon,
  loading = undefined,
  link = '',
  target = '_blank',
  iconOnly = false,
  isFull = false
}) {
  return (
    <>
      {iconOnly ? '':''}
      {type === 'link' ? (
        <a
          className={`inline-flex items-center justify-center relative rounded-lg ${objectConvert(
            buttonSizes[size]
          )} ${
            disabled ? ` !bg-gray-500` : objectConvert(buttonStyles[styleVariant])
          } ${loading ? '!text-transparent' : ''} ${className}`}
          href={link}
          target={target}
        >
          <ContentBtn
            children={children}
            rightIcon={rightIcon}
            leftIcon={leftIcon}
            loading={loading}
          />
        </a>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`inline-flex items-center justify-center relative rounded-md ${isFull? `w-full` : `w-max`} ${objectConvert(
            buttonSizes[size]
          )} ${
            disabled
              ? ` !bg-gray-400 !text-white`
              : objectConvert(buttonStyles[styleVariant])
          } ${loading ? '!text-transparent' : ''} ${className} ${iconOnly?`!px-0 w-[42px]`:``}`}
          type={type}
        >
          <ContentBtn
            children={children}
            rightIcon={rightIcon}
            leftIcon={leftIcon}
            loading={loading}
            size={size}
          />
        </button>
      )}
    </>
  )
}

function ContentBtn({ children, rightIcon, leftIcon, loading, size }) {
  return (
    <>
      {loading !== undefined && loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
          loading ...
        </div>
      ) : (
        ''
      )}
      {leftIcon ? (
        <div className={`flex ${iconSizes[size]} items-center content-center`}>
          {leftIcon}
        </div>
      ) : (
        ''
      )}
      {children}
      {rightIcon ? (
        <div className={`flex ${iconSizes[size]} items-center content-center`}>
          {rightIcon}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Button