
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView,Text,StatusBar,} from 'react-native';
import { SplashScreen, SignIn } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';




const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Router/>
      </Provider>
    </NavigationContainer>
  );
};



export default App;
