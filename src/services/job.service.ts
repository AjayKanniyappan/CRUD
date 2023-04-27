import ApiClient from '@services/ApiClient';
import { VITE_MOCK_API_KEY } from '@constants/index';

const headers: CRUD.Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

const job = new ApiClient(`https://${VITE_MOCK_API_KEY}.mockapi.io/`, headers);

export default job;
