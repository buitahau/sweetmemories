import { useInfiniteQuery } from '@tanstack/react-query';
import type { ImagesListResponse } from '../types/image';

export function useInfiniteImages() {
  return useInfiniteQuery<ImagesListResponse>({
    queryKey: ['images'],
    queryFn: async ({ pageParam }) => {
      const url = new URL('/api/images', window.location.origin);
      if (pageParam) {
        url.searchParams.set('cursor', pageParam as string);
      }
      url.searchParams.set('limit', '20');

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      return response.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined,
  });
}
