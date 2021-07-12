import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Typography, Colors, Spacing,} from '../styles';

export const gloableStyles =  StyleSheet.create({
    mainContainer: {
        textAlign: 'center',
        alignSelf: 'stretch',  
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: wp('5%'),
      },
      logoContainer: {
        alignSelf: 'center',
        marginTop: hp('7%')
      },
      logoText: {
        ...Typography.FONT_REGULAR,
        color: Colors.WHITE,
        textAlign:'center',
        fontSize: Typography.FONT_SIZE_23,
        paddingTop: hp('1%'),
        letterSpacing: wp('0.4%')
      },
      btnPrimary : {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 13,
        backgroundColor: Colors.BUT_PRIMARY,
    },
    btnPrimaryText: {
      ...Typography.FONT_REGULAR,
      fontSize: Typography.FONT_SIZE_12,
    },
    btnOutline : {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 13,
        borderColor: Colors.BUT_PRIMARY,
        borderWidth: wp('0.4%')
    },
    btnOutlineText: {
      ...Typography.FONT_REGULAR,
      fontSize: Typography.FONT_SIZE_18,
      color: Colors.WHITE,
    },
    textInputContainer: {
      marginTop: hp('2.8%')
    },
    textInputGroup: {
      paddingVertical: hp('1.8%'),
    },
    inputLable: {
      ...Typography.FONT_REGULAR,
      fontSize: Typography.FONT_SIZE_14,
      color: Colors.WHITE,
      paddingLeft: wp('3%'),
      paddingBottom: hp('1.5%')
    },
    inputStyle: {
      width: wp('90%'),
      borderRadius: 13,
      borderColor: Colors.BORDER_GRAY,
      borderWidth: wp('0.4%'),
      color: Colors.WHITE,
      paddingHorizontal: wp('3%'),
      marginHorizontal: wp('3%')
    },
    focusInputStyle: {
      width: wp('90%'),
      borderRadius: 13,
      borderColor: Colors.BUT_PRIMARY,
      borderWidth: wp('0.4%'),
      color: Colors.WHITE,
      paddingHorizontal: wp('3%')
    },
    messageBlue: {
        color: Colors.BLUE,
        paddingTop: hp('1%')
    },
    textRight: {
      textAlign: 'right',
    },
    DecscriptionToText: {
      ...Typography.FONT_LIGHT,
      color: Colors.WHITE,
      fontSize: Typography.FONT_SIZE_16,
      paddingTop: hp('0.5%'),
      paddingLeft: wp('0.8%')
    },
    DecscriptionToText12: {
      ...Typography.FONT_LIGHT,
      color: Colors.WHITE,
      fontSize: Typography.FONT_SIZE_12,
      paddingTop: hp('0.5%'),
    },
    headingText: {
      ...Typography.FONT_SEMIBOLD,
      color: Colors.WHITE,
      fontSize: Typography.FONT_SIZE_18,
    },
    headingText24: {
      ...Typography.FONT_SEMIBOLD,
      color: Colors.WHITE,
      fontSize: Typography.FONT_SIZE_24,
    },
    headingText20: {
      ...Typography.FONT_SEMIBOLD,
      color: Colors.WHITE,
      fontSize: Typography.FONT_SIZE_24,
    },
    headingText16: {
      ...Typography.FONT_SEMIBOLD,
      color: Colors.WHITE,
      fontSize: Typography.FONT_SIZE_16,
    }
  });