export type TUser = {
  uid: number;
  id: string;
  name: string;
  first_name: string;
  last_name?: string | null;
  email?: string | null;
  password: string;
};
