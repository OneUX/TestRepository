import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppColors from '../../constants/AppColors';

function Button({
  Icon,
  onPress,
  marginRight,
  backgroundColor = AppColors.primary,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, marginRight && {marginRight}, {backgroundColor}]}>
      {Icon ? <Icon marginRight={10} /> : null}
      <Text style={styles.txt}>Directions on google maps</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    fontWeight: '500',
    color: AppColors.light,
  },
  button: {
    width: '100%',
    minHeight: 44,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Button;
