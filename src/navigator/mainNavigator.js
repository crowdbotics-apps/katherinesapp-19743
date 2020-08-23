import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList93414Navigator from '../features/ArticleList93414/navigator';
import ArticleList93413Navigator from '../features/ArticleList93413/navigator';
import Maps93394Navigator from '../features/Maps93394/navigator';
import Add-Item93393Navigator from '../features/Add-Item93393/navigator';
import Maps93389Navigator from '../features/Maps93389/navigator';
import UserProfile93385Navigator from '../features/UserProfile93385/navigator';
import Maps93291Navigator from '../features/Maps93291/navigator';
import Add-Item93290Navigator from '../features/Add-Item93290/navigator';
import Maps93286Navigator from '../features/Maps93286/navigator';
import UserProfile93282Navigator from '../features/UserProfile93282/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList93414: { screen: ArticleList93414Navigator },
ArticleList93413: { screen: ArticleList93413Navigator },
Maps93394: { screen: Maps93394Navigator },
Add-Item93393: { screen: Add-Item93393Navigator },
Maps93389: { screen: Maps93389Navigator },
UserProfile93385: { screen: UserProfile93385Navigator },
Maps93291: { screen: Maps93291Navigator },
Add-Item93290: { screen: Add-Item93290Navigator },
Maps93286: { screen: Maps93286Navigator },
UserProfile93282: { screen: UserProfile93282Navigator },

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
