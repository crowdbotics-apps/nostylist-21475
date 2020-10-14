import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps141568Navigator from '../features/Maps141568/navigator';
import Add-Item141567Navigator from '../features/Add-Item141567/navigator';
import Maps141563Navigator from '../features/Maps141563/navigator';
import UserProfile141559Navigator from '../features/UserProfile141559/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps141568: { screen: Maps141568Navigator },
Add-Item141567: { screen: Add-Item141567Navigator },
Maps141563: { screen: Maps141563Navigator },
UserProfile141559: { screen: UserProfile141559Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
