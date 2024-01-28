import React from 'react'
import { objectConvert } from '../util/functions'
// import PropTypes from 'prop-types';

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
    fontWeight: 'font-bold',
  },
}

const buttonSizes = {
  small: {
    height: 'h-[36px]',
    padding: 'px-4',
    fontSize: 'text-label-sm',
    gap: 'gap-1',
  },
  medium: {
    height: 'h-[42px]',
    padding: 'px-5',
    fontSize: 'text-body-base',
    gap: 'gap-2',
  },
  large: {
    height: 'h-[50px]',
    padding: 'px-7',
    fontSize: 'text-label-lg',
    gap: 'gap-2',
  },
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
}) {
  return (
    <>
      {iconOnly ? '':''}
      {type === 'link' ? (
        <a
          className={`inline-flex items-center justify-center relative rounded-md ${objectConvert(
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
          className={`inline-flex items-center justify-center relative rounded-md ${objectConvert(
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
          />
        </button>
      )}
    </>
  )
}

function ContentBtn({ children, rightIcon, leftIcon, loading }) {
  return (
    <>
      {loading !== undefined && loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
          Loading...
        </div>
      ) : (
        ''
      )}
      {leftIcon ? (
        <div className="flex w-[16px] h-[16px] items-center content-center">
          {leftIcon}
        </div>
      ) : (
        ''
      )}
      {children}
      {rightIcon ? (
        <div className="flex w-[16px] h-[16px] items-center content-center">
          {rightIcon}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Button
