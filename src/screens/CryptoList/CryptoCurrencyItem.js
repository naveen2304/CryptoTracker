import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const CryptoCurrencyItem = ({item = {}} = {}) => {
  return (
    <View style={styles().itemContainer}>
      <View style={styles().leftContainer}>
        <Text style={styles().rank}>{item?.cmc_rank ?? 0}</Text>
        <Image
          source={{uri: item?.logo ?? ''}}
          resizeMode="contain"
          style={styles().logo}
        />
        <View style={styles().nameSymbolContainer}>
          <Text style={styles().name}>{item?.name ?? ''}</Text>
          <Text style={styles().symbol}>{item?.symbol ?? ''}</Text>
        </View>
      </View>
      <View style={styles().middleContainer}>
        <Text style={styles().price}>
          {parseFloat((item?.quote?.INR?.price ?? 0).toFixed(2)).toLocaleString(
            'en-IN',
            {
              style: 'currency',
              currency: 'INR',
            },
          )}
        </Text>
      </View>
      <View style={styles().rightContainer}>
        <Text style={styles().supplyMetrics}>
          {parseFloat(
            (item?.circulating_supply ?? 0).toFixed(0),
          ).toLocaleString('en-IN')}
        </Text>
      </View>
    </View>
  );
};

export default CryptoCurrencyItem;
