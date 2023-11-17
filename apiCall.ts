interface Params<T> {
  fn: () => Promise<T>;
  beforeCall?: () => void;
  afterCall?: () => void;
  onSuccess?: (data: T) => void;
  onError?: (data: T) => void;
  setLoading?: (val: boolean) => void;
}

async function apiCall<T>({
  fn,
  afterCall,
  beforeCall,
  onSuccess,
  onError,
  setLoading,
}: Params<T>) {
  beforeCall && beforeCall();
  setLoading && setLoading(true);
  const resp: T = await fn();
  const status = (resp as any).status || 500;
  if (status >= 200 && status < 210) {
    onSuccess && onSuccess(resp);
  } else {
    onError && onError(resp);
  }
  setLoading && setLoading(false);
  afterCall && afterCall();
}

export default apiCall;
