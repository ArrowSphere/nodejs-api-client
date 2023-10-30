export type ProgramTypeGraphQL = {
  id?: number;
  internalName?: string;
  name?: string;
  vendor?: VendorTypeGraphQL;
};

export type VendorTypeGraphQL = {
  id?: number;
  name?: string;
};
