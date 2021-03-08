import { CommentType } from "../../../ui/App/App";

import comments from '../../../ui/assets/comments.json'
const getListCommentsFake = (): CommentType[] => {
  return comments
};

export { getListCommentsFake };