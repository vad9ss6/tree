import {
  useMutation,
  MutationKey,
  MutateFunction,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { AxiosError } from "axios";

export function useApiMutation<T, V>(
  mutationKey: MutationKey,
  mutateFn: MutateFunction<T, unknown, V, unknown>,
  options?: UseMutationOptions<T, unknown, V>
): UseMutationResult<T, AxiosError<unknown>, V> {
  return useMutation<T, AxiosError, V, unknown>(mutationKey, mutateFn, {
    ...options,
  });
}
