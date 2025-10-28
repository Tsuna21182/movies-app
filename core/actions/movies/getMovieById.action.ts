import { movieApi } from "@/core/api/movieApi";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";

import { MovieDBMovieResponse } from "@/infrastructure/interfaces/movieDBResponse";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieById = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    console.log("pelicula http cargada");

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movie";
  }
};
