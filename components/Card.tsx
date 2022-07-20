import React from 'react'

const Card = ({
    className,
    children,
    ...props
}) => {
  return (
    <div
    className={className+' rounded-[21px] bg-primary-dark-gray p-5'}
    {...props}
    >
        {children}
    </div>
  )
}

export default Card