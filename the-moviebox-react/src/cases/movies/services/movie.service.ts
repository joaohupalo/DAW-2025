import { api } from "../../../lib/axios";

export type MovieDTO ={
    title: string;
    year: number;
    image: string;
    genres: string;
}

const _ENDPOINT = '/movies?key=30e77a50'

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    }
}