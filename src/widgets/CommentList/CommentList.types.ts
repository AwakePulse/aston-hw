export interface CommentType {
    id: number;
    text: string;
}

export interface CommentListProp {
    comments: CommentType[];
}