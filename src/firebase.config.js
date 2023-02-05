import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD4uPP6mGeDbCCv5T_x7ZAV4EtDFe9b1xU",
    authDomain: "food-app-4a5b8.firebaseapp.com",
    databaseURL: "https://food-app-4a5b8-default-rtdb.firebaseio.com",
    projectId: "food-app-4a5b8",
    storageBucket: "food-app-4a5b8.appspot.com",
    messagingSenderId: "346085629359",
    appId: "1:346085629359:web:168fcc62ba0c654dca235a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage};