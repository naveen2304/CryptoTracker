import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const googleSignInUtil = async navigation => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  navigation.navigate('MyDrawer', {
    userName: userInfo?.user?.givenName ?? '',
  });
};

export const googleSignOutUtil = async () => {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
};
