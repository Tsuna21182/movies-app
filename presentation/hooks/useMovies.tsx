import { bestRatedMovies } from "@/core/actions/movies/bestRated.action";
import { comingSoonTheaters } from "@/core/actions/movies/comingSoonTheater.action";
import { getMovieById } from "@/core/actions/movies/getMovieById.action";
import { getMovieCastAction } from "@/core/actions/movies/getMovieCast.action";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = (id?: number) => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const bestRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "bestRated"],
    queryFn: ({ pageParam }) => {
      return bestRatedMovies({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (_, page) => page.length + 1,
  });

  const comingSoonQuery = useQuery({
    queryKey: ["movies", "comingSoon"],
    queryFn: comingSoonTheaters,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const getMovieByID = useQuery<CompleteMovie>({
    queryKey: ["movies", id],
    queryFn: () => getMovieById(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const getCastMovie = useQuery({
    queryKey: ["CastMovie", "cast", id],
    queryFn: () => getMovieCastAction(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    bestRatedQuery,
    comingSoonQuery,
    getMovieByID,
    getCastMovie,
  };
};
