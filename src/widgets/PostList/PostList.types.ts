import {Post} from "../../entities/post/Post.types.ts";

export interface PostListProp {
    posts?: Post[];
    selectedFilter: string;
    onFilterChange: (filter: string) => void;
}