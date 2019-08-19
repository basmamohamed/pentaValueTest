import React from 'react';
import {createStackNavigator , createAppContainer} from 'react-navigation'
import NavigationService from './src/navigation/NavigationService'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import SingleProduct from './src/SingleProduct'
import reducers from './src/Redux/reducers'
import Footer from './src/common/Footer'

const TopLevelNavigator = createStackNavigator({
  Footer :{screen:Footer},
  SingleProduct : { screen:SingleProduct},
  
},
{
  headerMode:'none',
  navigationOptions:{
    headerVisible : false
  }
})
const AppContainer = createAppContainer(TopLevelNavigator)
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
    </Provider>
  )
};
export default App;
