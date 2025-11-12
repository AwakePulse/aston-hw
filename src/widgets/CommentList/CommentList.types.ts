import {Comment} from "../../entities/comment/Comment.types.ts";

export interface CommentListProp {
    comments: Comment[];
    isLoading: boolean;
}