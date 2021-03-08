import React, {useState, useEffect}  from 'react';
import {getListComments} from "../../core/services/comments/getListComments";
// import {getListCommentsFake as getListComments} from "../../core/services/comments/getListCommentsFake"
import {CommentItem} from '../components/CommentItem';
import './App.css';

export type CommentType =  {
  image: string,
  name: string,
  verified: string,
  title: string,
  content: string,
  className: string,
  bg: string,
  colorText: string,
  large: string, 
};

const App = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    const initComments = async () => {
      const commentsLoad = await getListComments();
      setComments(commentsLoad)
    }
    initComments();
  }, []);
  return (
    <div className="App cw">
        {comments.map((comment, index) => {
          return (
            <CommentItem
              key={index}
              image={comment.image}
              name={comment.name}
              verified={comment.verified}
              title={comment.title}
              content={comment.content}
              className={comment.className}
              bg={comment.bg}
              colorText={comment.colorText}
              large={comment.large}
            />
          );
        })}
    </div>
  );
}

export default App;