import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';

export default StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  txt: {
    fontSize: 14,
    fontWeight: '400',
    color: AppColors.dark,
  },
  iconView: {
    width: 32,
  },
});
