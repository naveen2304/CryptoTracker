import {StyleSheet} from 'react-native';

const styles = (loading = false) =>
  StyleSheet.create({
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      alignItems: 'center',
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '35%',
      marginRight: 20,
    },
    nameSymbolContainer: {
      display: 'flex',
      width: '65%',
    },
    rank: {
      fontSize: 16,
      color: 'white',
      width: '18%',
      textAlign: 'center',
    },
    name: {fontSize: 18, color: 'white'},
    symbol: {
      fontSize: 10,
      fontWeight: '200',
      color: 'white',
    },
    supplyMetrics: {
      fontSize: 12,
      fontWeight: '200',
      textAlign: 'right',
      color: 'white',
    },
    rightContainer: {width: '30%'},
    price: {
      fontSize: 16,
      textAlign: 'right',
      color: 'white',
    },
    middleContainer: {
      width: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    mainContainer: {
      backgroundColor: 'darkslategrey',
      height: '100%',
      justifyContent: loading ? 'center' : 'flex-start',
    },
    dataContainer: {paddingBottom: 40},
    leftHeaderContainer: {
      width: '32%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    rankHeader: {width: '10%', color: 'white'},
    column: {
      textAlign: 'left',
      color: 'white',
      width: '20%',
    },
    logo: {width: '20%', height: 20, marginRight: 10, marginLeft: 10},
  });

export default styles;
