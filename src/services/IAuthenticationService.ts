import { TAuthenticationToken } from "../models/user/TAuthenticationToken";

export interface IAuthenticationService {
  signInAsync: (
    username: string,
    password: string
  ) => Promise<TAuthenticationToken>;
  signOut: () => void;
  resetPasswordAsync: (username: string) => void;
  isProfileValidAsync: (token: TAuthenticationToken) => Promise<boolean>;
  loadProfileFromStoreAsync: () => Promise<TAuthenticationToken>;
}
