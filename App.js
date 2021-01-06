import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Facebook from './screens/facebookPage'
import Insta from './screens/instaPage'


export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook :{screen :Facebook },
  Instagram:{screen :Insta}
})

const AppContainer = createAppContainer(TabNavigator)
