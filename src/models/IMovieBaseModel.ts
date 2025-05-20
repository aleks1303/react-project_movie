import type {IMovie} from "./IMovie.ts";

export interface IMovieBaseModel {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}




