import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ActivityIndicator, DataTable} from 'react-native-paper';
import getQuotesLatest from '../../api/getQuotesLatest';
import styles from './styles';

const Portfolio = () => {
  const holdings = [
    {id: 1, name: 'Bitcoin', quantity: 0.01},
    {id: 1027, name: 'Ethereum', quantity: 0.4},
    {id: 825, name: 'Tether', quantity: 0.6},
    {id: 1839, name: 'BNB', quantity: 0.1},
  ];
  const [holdingValues, setHoldingValues] = useState();
  const [loading, setLoading] = useState(false);

  const setCryptoDetails = async () => {
    setLoading(true);
    const responseData = await getQuotesLatest(
      holdings.map(({id = 0} = {}) => id).join(','),
    );
    setLoading(false);
    setHoldingValues(
      holdings.map(({id = 0, quantity = 0} = {}) =>
        parseFloat(
          (responseData?.data?.[id]?.quote?.INR?.price ?? 0) *
            quantity.toFixed(2),
        ).toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR',
        }),
      ),
    );
  };

  const totalValue = (holdingValues ?? []).reduce(
    (previousValue = 0, holdingValue = '') =>
      previousValue + parseFloat(holdingValue.substring(1).replace(/,/g, '')),
    0,
  );

  useEffect(() => {
    setCryptoDetails();
  }, []);

  return (
    <View style={styles(loading).mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <DataTable style={styles().container}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles().columnData}>
              Name
            </DataTable.Title>
            <DataTable.Title textStyle={styles().columnData}>
              Quantity
            </DataTable.Title>
            <DataTable.Title textStyle={styles().columnData}>
              Value
            </DataTable.Title>
          </DataTable.Header>
          {holdings.map(({name = '', quantity = 0} = {}, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell textStyle={styles().columnData}>
                {name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={styles().columnData}>
                {quantity}
              </DataTable.Cell>
              <DataTable.Cell textStyle={styles().columnData}>
                {holdingValues?.[index] ?? 0}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Row>
            <DataTable.Cell textStyle={styles().columnData}>
              Total Value
            </DataTable.Cell>
            <DataTable.Cell />
            <DataTable.Cell textStyle={styles().columnData}>
              {parseFloat(totalValue?.toFixed(2))?.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              }) ?? 0}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      )}
    </View>
  );
};

export default Portfolio;
