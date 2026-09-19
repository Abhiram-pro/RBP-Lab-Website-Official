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

/**
 * Object-shaped variant. The research page needs four collections that belong
 * to one view, so it fetches them in a single GROQ object rather than firing
 * four separate requests.
 *
 * `isEmpty` decides whether Sanity actually has content; without it a dataset
 * with no research documents would return `{pipeline: [], ...}`, which is
 * truthy, and blank the page.
 */
export function useSanityObject<TRaw, TOut>(
  query: string,
  map: (raw: TRaw) => TOut,
  fallback: TOut,
  isEmpty: (raw: TRaw) => boolean,
): { data: TOut; isLive: boolean } {
  const [data, setData] = useState<TOut>(fallback);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch<TRaw>(query)
      .then((raw) => {
        if (cancelled || !raw || isEmpty(raw)) return;
        setData(map(raw));
        setIsLive(true);
      })
      .catch((error) => {
        if (!cancelled) console.warn('[sanity] falling back to bundled content:', error?.message);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, isLive };
}
