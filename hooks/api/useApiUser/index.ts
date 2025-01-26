import { useMutation } from '@tanstack/react-query';
import api from '~/core/api/api';
import { API } from '~/core/api/config';
import { encodeQueryData } from '~/core/api/utils';

export async function useApiGetNonce(payload: any): Promise<any> {
  try {
    const filters = encodeQueryData(payload);
    const { data } = await api.get(`${API.USER.NONCE}?${filters}`);
    return data;
  } catch {
    throw new Error('Something went wrong with our system. Please try again!');
  }
}

async function apiLoginWallet(payload: any): Promise<any> {
  try {
    const { data } = await api.post(API.USER.AUTH, payload);
    return data;
  } catch {
    throw new Error('Something went wrong with our system. Please try again!');
  }
}

export const useApiLoginWallet = () => {
  return useMutation({
    mutationFn: (payload: any) => apiLoginWallet(payload),
  });
};
