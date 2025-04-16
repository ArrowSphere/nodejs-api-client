export type GraphqlApiProviderType = {
  id?: number;
  name?: string;
};

export type GraphqlApiProviderInfoType = {
  id?: number;
  errorMessage?: string;
  isProvisioned?: boolean;
  provider?: GraphqlApiProviderType;
};
