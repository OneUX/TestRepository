import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';

export default StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: AppColors.light,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 16,
    paddingTop: 47,
    paddingBottom: 70,
    top: -38,
  },
  headerBG: {
    width: '100%',
    height: 293,
    backgroundColor: AppColors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.light,
    borderRadius: 5,
  },
});
