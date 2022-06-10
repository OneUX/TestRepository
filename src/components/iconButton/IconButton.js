import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

function IconButton({Icon, marginRight, backgroundColor = '#F0F0F3'}) {
  return (
    <TouchableOpacity
      style={[styles.button, marginRight && {marginRight}, {backgroundColor}]}>
      {Icon ? <Icon /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
