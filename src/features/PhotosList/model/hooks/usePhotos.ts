import {useGetAlbumPhotosQuery} from "../../../../shared/api/mainApi.ts";

export const usePhotos = (limit, id) => {
    const { data, isLoading, error } = useGetAlbumPhotosQuery({albumId: Number(id), limit});

    return {
        photos: data ?? [],
        isLoading,
        error
    }
}