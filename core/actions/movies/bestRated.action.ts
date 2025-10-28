import { movieApi } from "@/core/api/movieApi";
import { MoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const bestRatedMovies = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MoviesResponse>("/top_rated", {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    console.log(movies);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
