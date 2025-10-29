import { movieApi } from "@/core/api/movieApi";
import { MovieDBCastResponse } from "@/infrastructure/interfaces/movie-creditsResponse";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCastResponse>(
      `/${movieId}/credits`
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load cast";
  }
};
