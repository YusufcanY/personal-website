import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

export default (_, inject) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCvcABL2a8UHaodjyOHMhN0I6MW0PxiZhU',
    authDomain: 'yusufcan-yilmaz-com.firebaseapp.com',
    projectId: 'yusufcan-yilmaz-com',
    storageBucket: 'yusufcan-yilmaz-com.appspot.com',
    messagingSenderId: '427713746573',
    appId: '1:427713746573:web:204a7524bd9a6c145ef4c4',
    measurementId: 'G-KWC9PMKWZN',
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();
  inject('db', db);
  inject('analytics', analytics);
};
