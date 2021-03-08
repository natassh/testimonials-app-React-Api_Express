import React from 'react';
import {PersonInfo} from '../PersonInfo'
import { Title } from '../Title';
import { MainContent } from '../MainContent';
import './CommentItem.css';

const CommentItem: React.FC<CommentItemProps> = ({ image,  name, verified, title, content, className, bg, colorText, large="" }) => {
  const classes = `${className} ${bg} ${colorText} ${large}`;
  return (
    <article className={classes} aria-label="testimonial"  /*data-testid="testimonial"*/>
      <PersonInfo
        image={image}
        name={name}
        verified={verified}
      />
      <header>
        <Title>
          {title}
        </Title>
      </header>
      <MainContent>
        {content}
      </MainContent>
    </article>
  );
}
export {CommentItem};

type CommentItemProps = {
  image: string,
  name: string,
  verified: string,
  title: string,
  content: string,
  className: string,
  bg: string,
  colorText: string,
  large: string, 
}


