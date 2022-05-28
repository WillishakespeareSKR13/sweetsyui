/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

interface PropsSettings {
  onCompleted?: () => void;
  onError?: () => void;
}

const settingsInit = {
  onCompleted: () => {
    return null;
  },
  onError: () => {
    return null;
  },
};
interface PropsState {
  data: any;
  loading: boolean;
  error: any;
}

type UseLazyFetchType = [
  lazyFetch: () => void,
  fetch: {
    data: any;
    loading: boolean;
    error: any;
    isFetch: boolean;
    refetch: () => void;
  }
];

const useLazyFetch = (
  url: RequestInfo,
  setings: PropsSettings = settingsInit,
  options?: RequestInit
): UseLazyFetchType => {
  const { onCompleted, onError } = setings;
  const [refetchState, setRefetchState] = useState(false);
  const [lazyRefetchState, setLazyRefetchState] = useState(false);
  const [fetchState, setFetchState] = useState<PropsState>({
    data: false,
    error: { status: false, message: null },
    loading: false,
  });

  const lazyFetch = () => setLazyRefetchState(true);
  const refetch = () => setRefetchState(!refetchState);

  useEffect(() => {
    if (fetchState.data && onCompleted && lazyRefetchState) {
      onCompleted();
    }
  }, [fetchState.data]);

  useEffect(() => {
    if (fetchState.error && onError && lazyRefetchState) {
      onError();
    }
  }, [fetchState.error]);

  useEffect(() => {
    const fetchData = async () => {
      setFetchState({ error: null, data: null, loading: true });
      try {
        const response = await fetch(url, {
          ...options,
        });
        const data = await response.json();
        const isError =
          !!data?.errors?.find((error: any) => error.status === 400) ||
          data?.status === 400;
        if (isError) {
          setFetchState({ data: null, error: data, loading: false });
        } else {
          setFetchState({ error: null, data, loading: false });
        }
      } catch (error) {
        setFetchState({ data: null, error, loading: false });
      }
    };
    if (lazyRefetchState) {
      fetchData();
    }
  }, [lazyRefetchState, refetchState, url]);

  return [lazyFetch, { ...fetchState, isFetch: lazyRefetchState, refetch }];
};

export default useLazyFetch;
