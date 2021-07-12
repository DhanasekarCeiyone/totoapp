import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppStatusBar from './components/AppStatusBar';
import AppNavigator from "./navigations/AppNavigator"
import { Typography, Colors, Spacing } from './styles'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
         <AppStatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content"></AppStatusBar>
          <AppNavigator />
      </SafeAreaView>
    </>
  ) 
};

const styles = StyleSheet.create({
  mainContainer: {
      textAlign: 'center',
      alignSelf: 'stretch',
      width: wp('100%'),
      height: hp('100%'),
      backgroundColor: Colors.PRIMARY,
    },
    headerStyle: {
    ...Typography.FONT_BOLD,
     fontSize: Typography.FONT_SIZE_16,
     color: Colors.BLACK,
    }
})
export default App;
