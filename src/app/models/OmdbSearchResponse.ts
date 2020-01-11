import { Movie } from './Movie';

export class OmdbSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error: string;
}
