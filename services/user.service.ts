import { fetchJson } from '@/helpers/fetcher';

async function getProfile() {
  return fetchJson('/api/user/profile', 'GET');
}

const UserService = {
  getProfile,
};

export default UserService;
