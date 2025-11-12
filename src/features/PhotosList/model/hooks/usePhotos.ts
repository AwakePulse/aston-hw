import {useGetAlbumPhotosQuery} from "../../../../entities/albums/api/albumsApi.ts";

export const usePhotos = (limit, id) => {
    const { data, isLoading, error } = useGetAlbumPhotosQuery({albumId: Number(id), limit});

    return {
        photos: data ?? [],
        isLoading,
        error
    }
}