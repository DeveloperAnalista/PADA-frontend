import React from 'react'
import { ButtonLogin } from '../../pages/Login/styles';
//import { ButtonLogin } from './Button.styles';

<<<<<<< HEAD
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
=======
export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary";
  title: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  disabled,
  color,
  title,
  style,
  type,
}: ButtonProps) => {
  return (
    <Container
      title={title}
      color={color}
      disabled={disabled}
      style={style}
      type={type}
    >
      {children}
    </Container>
  );
};
>>>>>>> 8a00cd84f6fc7520807ec1121dfe0b00aedcfc23

