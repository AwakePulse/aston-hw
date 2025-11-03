import {CommentType} from "../../widgets/CommentList/CommentList.types.ts";

export interface Post {
    id: number;
    title: string;
    body: string;
    comments?: CommentType[];
}

export interface PostCardProps {
    post: Post;
    isOpen: boolean;
    onToggle: () => void;
}