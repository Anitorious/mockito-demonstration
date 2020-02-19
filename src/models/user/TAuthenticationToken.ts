export type TAuthenticationToken = {
  id: string;
  name: string;
  first_name: string;
  last_name?: string | null;
  audiences: string[];
  contexts: string[];
  permissions: string[];
  roles: string[];
  iat: number;
};
