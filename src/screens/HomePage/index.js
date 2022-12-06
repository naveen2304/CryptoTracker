import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {googleSignInUtil, googleSignOutUtil} from '../../utils';
import styles from './styles';

const image = {
  uri: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
};

const HomePage = ({navigation, route}) => {
  useEffect(() => {
    if (route?.params?.logout) {
      googleSignOutUtil();
    }
  }, [route?.params?.logout]);

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId:
        '437175937394-1ltogm37hifkei26dtgi03s9cun1j6st.apps.googleusercontent.com',
    });
  }, []);

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome To The CryptoTracker</Text>
          <GoogleSigninButton
            style={styles.googleSignInButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => googleSignInUtil(navigation)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomePage;
