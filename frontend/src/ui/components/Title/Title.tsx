import React from 'react';
import './Title.css';

const Title: React.FC<TitleProps> = ({ children }) => (
  <h1>{children}</h1>
);

export {Title};

type TitleProps = {
  className?: string,
  children: React.ReactNode
}





