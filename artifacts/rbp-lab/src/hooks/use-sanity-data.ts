import { useEffect, useState } from 'react';
import { sanityClient } from '@/lib/sanity';

/**
 * Fetches a GROQ query and falls back to bundled data.
 *
 * The fallback is the point of this hook. The lab edits content in the Studio,
 * but the site must still render if Sanity is empty, unreachable, or the CORS
 * origin has not been added yet — a lab website that goes blank because a CMS
 * is down is worse than one showing slightly stale content. So the bundled
 * arrays render immediately, and Sanity replaces them only when it actually
 * returns rows.
 */
export function useSanityData<TDoc, TOut>(
  query: string,
  map: (docs: TDoc[]) => TOut[],
  fallback: TOut[],
): { data: TOut[]; isLive: boolean } {
  const [data, setData] = useState<TOut[]>(fallback);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch<TDoc[]>(query)
      .then((docs) => {
        if (cancelled || !Array.isArray(docs) || docs.length === 0) return;
        setData(map(docs));
        setIsLive(true);
      })
      .catch((error) => {
        // Keep the fallback on screen; surface the reason for debugging.
        if (!cancelled) console.warn('[sanity] falling back to bundled content:', error?.message);
      });

    return () => {
      cancelled = true;
    };
    // `map` is defined at module scope by every caller, so it is stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, isLive };
}
