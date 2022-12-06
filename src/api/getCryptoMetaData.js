import axios from 'axios';
import {CMC_PRO_API_KEY} from '@env';

const getCryptoMetaData = async (ids = '') => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}&CMC_PRO_API_KEY=${CMC_PRO_API_KEY}`,
  );
  return response?.data?.data ?? {};
};

export default getCryptoMetaData;
