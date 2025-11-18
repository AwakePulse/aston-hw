import {Comment} from "../../entities/comment/model/Comment.types.ts";

export interface CommentListProp {
    comments: Comment[];
    isLoading: boolean;
}