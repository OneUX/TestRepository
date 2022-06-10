import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function List({Icon, text}) {
  return (
    <View style={styles.list}>
      <View style={styles.iconView}>{Icon ? <Icon /> : null}</View>
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
}

export default List;
