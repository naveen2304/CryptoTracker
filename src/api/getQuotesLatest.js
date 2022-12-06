import axios from 'axios';
import {CMC_PRO_API_KEY} from '@env';

const getQuotesLatest = async (ids = '') => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${ids}&CMC_PRO_API_KEY=${CMC_PRO_API_KEY}&convert=INR`,
  );
  return response?.data ?? {};
};

export default getQuotesLatest;
