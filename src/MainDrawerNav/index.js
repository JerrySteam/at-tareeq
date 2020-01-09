import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

//Import Custom Sidebar
import CustomSidebarMenu from './customsidebarmenu';

//import drawer option screens
import HomeScreens from './Home';
import SettingsScreens from './Settings';
import FavouritesScreens from './Favourites';
import SearchScreens from './Search';
import AddEditLecturesScreens from './AddEdit';

//Stack Navigator for Options of Navigation Drawer
const HomeStackNavigator = HomeScreens;
const SettingsStackNavigator = SettingsScreens;
const FavouritesStackNavigator = FavouritesScreens;
const SearchStackNavigator = SearchScreens;
const AddEditLecturesStackNavigator = AddEditLecturesScreens;

//Drawer Navigator for the Navigation Drawer / Sidebar
const MainDrawerNavigator = createDrawerNavigator({
  //Drawer Options and indexing
  HomeDrawer: {
    screen: HomeStackNavigator,
  },
  LectureDrawer: {
    screen: HomeStackNavigator,
  },
  FavouritesDrawer: {
    screen: FavouritesStackNavigator,
  },
  AddEditLecturesDrawer: {
    screen: AddEditLecturesStackNavigator,
  },
  SearchDrawer: {
    screen: SearchStackNavigator,
  },
  DownloadsDrawer: {
    screen: SettingsStackNavigator,
  },
  ResourcesDrawer: {
    screen: SettingsStackNavigator,
  },
  SettingsDrawer: {
    screen: SettingsStackNavigator,
  },
},
{
  //For the Custom sidebar menu we have to provide our CustomSidebarMenu
  contentComponent: CustomSidebarMenu,
  //Sidebar width
  drawerWidth: Dimensions.get('window').width - 130,
});
export default MainDrawerNavigator;