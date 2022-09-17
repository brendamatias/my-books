import { fetchJson } from '@/helpers/fetcher';

async function getProfile(token: string) {
  return fetchJson('/api/user/profile', 'GET', null, token);
}

const UserService = {
  getProfile,
};

export default UserService;
