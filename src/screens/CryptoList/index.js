import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import getCryptoData from '../../api/getCryptoData';
import CryptoCurrencyItem from './CryptoCurrencyItem';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';
import getCryptoMetaData from '../../api/getCryptoMetaData';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState();
  const [cryptoMetaData, setCryptoMetaData] = useState();
  const [loading, setLoading] = useState(false);

  const setCryptoDetails = async () => {
    setLoading(true);
    const cryptoResponseData = await getCryptoData();
    const cryptoMetaResponseData = await getCryptoMetaData(
      cryptoResponseData.map(cryptoItem => cryptoItem.id).join(','),
    );
    setLoading(false);
    setCryptoMetaData(cryptoMetaResponseData);
    setCryptoData(cryptoResponseData);
  };

  useEffect(() => {
    setCryptoDetails();
  }, []);

  const renderItem = ({item}) => <CryptoCurrencyItem item={item} />;

  return (
    <View style={styles(loading).mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <View style={styles().dataContainer}>
          <View style={styles().itemContainer}>
            <Text style={styles().rankHeader}>Rank</Text>
            <Text style={styles().column}>Name</Text>
            <Text style={styles().column}>Price</Text>
            <Text style={styles().column}>Circulating Supply</Text>
          </View>
          <FlatList
            data={cryptoData?.map(cryptoItem => {
              return {
                ...cryptoItem,
                logo: cryptoMetaData?.[cryptoItem?.id?.toString() ?? '1']?.logo,
              };
            })}
            renderItem={renderItem}
            keyExtractor={item => item?.id ?? 0}
          />
        </View>
      )}
    </View>
  );
};

export default CryptoList;
