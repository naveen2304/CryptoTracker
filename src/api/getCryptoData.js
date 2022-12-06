import axios from 'axios';
import {CMC_PRO_API_KEY} from '@env';

const getCryptoData = async () => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=INR&CMC_PRO_API_KEY=${CMC_PRO_API_KEY}`,
  );
  return response?.data?.data ?? {};
};

export default getCryptoData;
