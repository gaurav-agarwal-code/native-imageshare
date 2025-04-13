import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const registerUser = async (email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    await userCredential.user.sendEmailVerification();
    return userCredential.user;
  } catch (error) {
    let errormsg = error.message;

    if (error.code === 'auth/email-already-in-use') {
      errormsg = 'That email address is already in use!';
    }

    if (error.code === 'auth/invalid-email') {
      errormsg = 'That email address is invalid!';
    }

    throw new Error(errormsg);
  }
}

export const loginUser = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      Alert.alert('Verify Email', 'Please verify your email before logging in');
      return;
    } else {
      console.log('Logged in successfully');
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
