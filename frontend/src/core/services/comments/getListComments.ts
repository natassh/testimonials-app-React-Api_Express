import { CommentType } from "../../../ui/App/App";

const getListComments = async(): Promise<CommentType[]> => {
  const endPoint = `${process.env.REACT_APP_API_HOST}/testimonials`;
  const commentsResponseObject = await fetch(endPoint);
  const commentsData = await commentsResponseObject.json();
  return commentsData;
};

export { getListComments };
