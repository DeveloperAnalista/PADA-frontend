import React from 'react'
import { ButtonLogin } from '../../pages/Login/styles';
//import { ButtonLogin } from './Button.styles';

type ButtonProps = React.ComponentProps<'button'> & {
    children?: React.ReactNode,
    style?: React.CSSProperties;
}
 
const Button = ({ children, ...props}: ButtonProps) => {
  return (
    <ButtonLogin 
        {...props}
    >
        {children}
        
    </ButtonLogin>
  )
}

export default Button

