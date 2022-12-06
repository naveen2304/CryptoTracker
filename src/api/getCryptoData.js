import axios from 'axios';

const getCryptoData = async () => {
  const response = await axios.get(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=INR&CMC_PRO_API_KEY=2c811d9d-70e3-4ff6-8b53-44da3b1e806e',
  );
  return response?.data?.data ?? {};
};

export default getCryptoData;
