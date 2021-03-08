import React from 'react';
import './MainContent.css';

const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <div className="mainContent">
    <p>{children}</p> 
  </div>
);

export {MainContent};

type MainContentProps = {
  className?: string,
  children: React.ReactNode
}





