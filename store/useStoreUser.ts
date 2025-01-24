import { create } from 'zustand';

type StoreUserType = {
  isLoggedIn: boolean;
  userToken: string;
};

const store = () => ({
  isLoggedIn: false,
  userToken: '',
});

const useStoreUser = create<StoreUserType>(store);

export default useStoreUser;

export function setStoreUser<T extends keyof StoreUserType>(x: Pick<StoreUserType, T>) {
  useStoreUser.setState(x);
}
