import { createStackNavigator } from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Lecture from './lectures';
import LecturedDesc from './description';

const RoutineTaleemStack = createStackNavigator({
  Lecture: {
    screen: Lecture,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  LectureDescription: {
    screen: LecturedDesc,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerStyle: {
        marginTop: wp('-6%'),
        marginBottom: wp('-3%'),
      },
      headerTransparent: true,
      headerTintColor: '#fff',
    }),
  },
},{headerMode:'screen'});

RoutineTaleemStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default RoutineTaleemStack;