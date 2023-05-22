export type WhoAmIOutput = {
  company: {
    hasAccessToXcp: boolean;
    isProtected: boolean;
    marketplace?: string;
    name?: string;
    reference: string;
    tags: string[];
  };
  user: {
    email?: string;
    firstname?: string;
    lastname?: string;
    login?: string;
    policies: string[];
    reference: string;
    rights: string[];
    scopes: string[];
    xapUsername: string;
  };
};
