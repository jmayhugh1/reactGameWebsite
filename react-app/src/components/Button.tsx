import React from "react";
interface Props {
  children: string;
  color? : string
  onClick : () => void
}
const Button = ({ children, color = 'primary', onClick }: Props) => {
  return <div className="btn btn-primary" onClick = {onClick}>{children}</div>;
};

export default Button;
