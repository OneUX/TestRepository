import React from 'react';
import {View} from 'react-native';
import styles from './styles';
function AnimatedContent({children}) {
  return <View style={styles.content}>{children}</View>;
}

export default AnimatedContent;
