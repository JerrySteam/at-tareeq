import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

//Import Custom Sidebar
import CustomSidebarMenu from './customsidebarmenu';

//import drawer option screens
import HomeScreens from './Home';
import FavouritesScreens from './Favourites';
import AddEditLecturesScreens from './AddEdit';
import SearchScreens from './Search';
import DownloadScreens from './Downloads';
import ResourcesScreens from './Resources';
import SettingsScreens from './Settings';

//Stack Navigator for Options of Navigation Drawer
const HomeStackNavigator = HomeScreens;
const FavouritesStackNavigator = FavouritesScreens;
const AddEditLecturesStackNavigator = AddEditLecturesScreens;
const SearchStackNavigator = SearchScreens;
const DownloadsStackNavigator = DownloadScreens;
const ResourcesStackNavigator = ResourcesScreens;
const SettingsStackNavigator = SettingsScreens;

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
    screen: DownloadsStackNavigator,
  },
  ResourcesDrawer: {
    screen: ResourcesStackNavigator,
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