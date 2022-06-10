import {StyleSheet} from 'react-native';
import AppColors from '../../constants/AppColors';

export default StyleSheet.create({
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: AppColors.darkGray,
    marginBottom: 33,
  },
  rating: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 8.5,
    marginBottom: 40,
  },
  greenTxt: {
    color: AppColors.green,
  },
  ratingTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: AppColors.darkGray,
    marginRight: 5,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  container: {
    backgroundColor: AppColors.light,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
