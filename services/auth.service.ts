import { fetchJson } from '@/helpers/fetcher';
import { SignInRequestData, SignUpRequestData } from '@/types';

async function signInRequest({ email, password }: SignInRequestData) {
  return fetchJson('/api/auth/login', 'POST', { email, password });
}

async function signUpRequest({ name, email, password }: SignUpRequestData) {
  return fetchJson('/api/auth/register', 'POST', { name, email, password });
}

const AuthService = {
  signInRequest,
  signUpRequest,
};

export default AuthService;
