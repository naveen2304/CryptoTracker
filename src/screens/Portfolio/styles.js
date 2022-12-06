import {StyleSheet} from 'react-native';

const styles = loading =>
  StyleSheet.create({
    mainContainer: {
      display: 'flex',
      backgroundColor: 'darkslategrey',
      height: '100%',
      justifyContent: loading ? 'center' : 'flex-start',
    },
    container: {
      padding: 15,
      display: 'flex',
      justifyContent: 'space-between',
    },
    tableHeader: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      marginRight: 10,
    },
    totalValueRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    columnData: {color: 'white', fontWeight: '500'},
  });

export default styles;
