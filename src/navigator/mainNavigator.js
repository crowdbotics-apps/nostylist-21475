import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item141706Navigator from '../features/Add-Item141706/navigator';
import Maps141702Navigator from '../features/Maps141702/navigator';
import UserProfile141698Navigator from '../features/UserProfile141698/navigator';
import Maps141617Navigator from '../features/Maps141617/navigator';
import Add-Item141616Navigator from '../features/Add-Item141616/navigator';
import Maps141612Navigator from '../features/Maps141612/navigator';
import UserProfile141608Navigator from '../features/UserProfile141608/navigator';
import Maps141568Navigator from '../features/Maps141568/navigator';
import Add-Item141567Navigator from '../features/Add-Item141567/navigator';
import Maps141563Navigator from '../features/Maps141563/navigator';
import UserProfile141559Navigator from '../features/UserProfile141559/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item141706: { screen: Add-Item141706Navigator },
Maps141702: { screen: Maps141702Navigator },
UserProfile141698: { screen: UserProfile141698Navigator },
Maps141617: { screen: Maps141617Navigator },
Add-Item141616: { screen: Add-Item141616Navigator },
Maps141612: { screen: Maps141612Navigator },
UserProfile141608: { screen: UserProfile141608Navigator },
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
