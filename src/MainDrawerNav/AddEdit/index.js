import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../navigationdrawerstructure'

import HomeScreen from './home';
import AddLectureScreen from './addlecture';
import EditLectureScreen from './editlecture';
import AddSpecialLectureScreen from './addspeciallecture';
import AddRoutineTaleemScreen from './addroutinetaleem';
import EditSpecialLectureScreen from './editspeciallecture';
import EditRoutineTaleemScreen from './editroutinetaleem';
import SingleSpecialLectureScreen from './singlespeciallecture';
import SingleRoutineTaleemScreen from './singleroutinetaleem';
import SpecialMapViewScreen from './specialmapview';
import RoutineMapViewScreen from './routinemapview';

const AddEditLectureScreens = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add/Edit Lectures',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  AddLecture: {
    screen: AddLectureScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Lecture',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  EditLecture: {
    screen: EditLectureScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Lecture',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  AddSpecialLecture: {
    screen: AddSpecialLectureScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Special Lecture',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff', 
    }),
  },
  AddRoutineTaleem: {
    screen: AddRoutineTaleemScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Add Routine Ta'leem",
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  EditSpecialLecture: {
    screen: EditSpecialLectureScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Edit Special Lecture",
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  EditRoutineTaleem: {
    screen: EditRoutineTaleemScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Edit Routine Ta'leem",
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  SingleSpecialLecture: {
    screen: SingleSpecialLectureScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Edit Special Lecture",
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  SingleRoutineTaleem: {
    screen: SingleRoutineTaleemScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Edit Routine Ta'leem",
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  SpecialMapView: {
    screen: SpecialMapViewScreen,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerTransparent: true,
      headerTintColor: '#000',
    }),
  },
  RoutineMapView: {
    screen: RoutineMapViewScreen,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerTransparent: true,
      headerTintColor: '#000',
    }),
  },
});
export default AddEditLectureScreens;