import React from 'react';
import './PersonInfo.css';

const PersonInfo: React.FC<PersonInfoProps> = ({image, name, verified}) => {
  return (
    <div className="personInfo">
      <figure>
        <img src={image} alt= {name} />
      </figure>
      <p>
        <strong>{name}</strong>
        <em>{verified}</em>
      </p>
  </div>
  );
}
export {PersonInfo};
type PersonInfoProps = {
  image: string,
  name: string,
  verified: string,
}

