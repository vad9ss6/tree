import {
  useQuery,
  QueryKey,
  QueryFunction,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { AxiosError } from "axios";

export function useApiQuery<T>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T>,
  options?: UseQueryOptions<T, AxiosError>
): UseQueryResult<T, AxiosError> {
  return useQuery<T, AxiosError, T>(queryKey, queryFn, {
    ...options,
  });
}
