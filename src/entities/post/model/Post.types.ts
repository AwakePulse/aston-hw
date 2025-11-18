export interface Post {
    id: number;
    title: string;
    body: string;
    comments?: Comment[];
}

export interface PostCardProps {
    post: Post;
    isOpen: boolean;
    onToggle: () => void;
}