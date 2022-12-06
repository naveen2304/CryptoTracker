import axios from 'axios';

const getCryptoMetaData = async (ids = '') => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}&CMC_PRO_API_KEY=2c811d9d-70e3-4ff6-8b53-44da3b1e806e`,
  );
  return response?.data?.data ?? {};
};

export default getCryptoMetaData;
