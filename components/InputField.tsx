import React from 'react'
import { colors } from '../lib/utils'

const InputField = ({
    label,
    setValue,
    className,
    ...props
}) => {
  return (
    <div {...props} className='flex flex-col text-primary_gray_20'>
        <label className='pl-2 pb-2 text-[14px] text-[#EEEFF3]'>{label}</label>
        <input 
        onChange={(e)=>{
            setValue(e.target.value)
        }}
        style={{
            backgroundColor: colors.primary_gray_80,
        }}
        className={className+' pl-3 border-2 text-[14px] outline-none border-primary_gray_60 focus:border-primary_gray_40 outline-1  p-2 rounded-lg'}
        type="text" placeholder="Enter your name" />
    </div>
  )
}

export default InputField