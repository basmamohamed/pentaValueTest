import React ,{Component} from 'react';
import { createAppContainer,createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AllProducts from '../AllProducts'
import HomeScreen from '../../pages/HomeScreen'
import SettingsScreen from '../../pages/SettingsScreen'
import DetailsScreen from '../../pages/DetailsScreen'
import ProfileScreen from '../../pages/ProfileScreen'

const FotterNavigation = createBottomTabNavigator (
    {
        Home:{
            screen: HomeScreen,
            navigationOptions: () => ({
              tabBarIcon: ({ focused }) => ( focused ? <Ionicons name='md-home' color='blue'/> :<Ionicons name='md-home' color='gray' /> ),
            }),
        },
            Settings:{
              screen: SettingsScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ focused }) => ( focused ? <Ionicons name='md-add-circle' color='blue'/> :<Ionicons name='md-add-circle' color='gray' /> ),
              }),
            },
            Profile:{
              screen: ProfileScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ focused }) => ( focused ? <Ionicons name='md-medkit' color='blue'/> :<Ionicons name='md-medkit' color='gray' /> ),
              }),
            },
              products:{
                screen: AllProducts,
                navigationOptions: () => ({
                  tabBarIcon: ({ focused }) => ( focused ? <Ionicons name='md-appstore' color='blue'/> :<Ionicons name='md-appstore' color='gray' /> ),
                }),
              },
             Details:{
                screen: DetailsScreen,
                navigationOptions: () => ({
                  tabBarIcon: ({ focused }) => ( focused ? <Ionicons name='md-attach' color='blue'/> :<Ionicons name='md-attach' color='gray' /> ),
              })
              }
    },
    
)
const AppContainer = createAppContainer(FotterNavigation);

export default class Footer extends Component {
    render() {
      return <AppContainer />;
    }
  }