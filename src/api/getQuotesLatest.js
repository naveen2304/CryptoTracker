import axios from 'axios';

const getQuotesLatest = async (ids = '') => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${ids}&CMC_PRO_API_KEY=2c811d9d-70e3-4ff6-8b53-44da3b1e806e&convert=INR`,
  );
  return response?.data ?? {};
};

export default getQuotesLatest;
