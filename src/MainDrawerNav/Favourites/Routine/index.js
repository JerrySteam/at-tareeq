import { createStackNavigator } from 'react-navigation-stack';
import Lecture from './lectures';
/*
export default createStackNavigator({
  Lecture,
},{headerMode:'none'});
*/
const RoutineTaleemStack = createStackNavigator({
  Lecture: {
    screen: Lecture,
    navigationOptions: ({ navigation }) => ({
      header: null
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