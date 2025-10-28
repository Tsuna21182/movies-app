import { movieApi } from "@/core/api/movieApi";
import { MoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const comingSoonTheaters = async () => {
  try {
    const { data } = await movieApi.get<MoviesResponse>("/upcoming");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    console.log(movies);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
