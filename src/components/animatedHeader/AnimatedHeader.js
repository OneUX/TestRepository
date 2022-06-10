import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import BackArrow from '../../assets/icons/backArrow.svg';
function AnimatedHeader() {
  return (
    <SafeAreaView style={styles.header} edges={['top']}>
      <TouchableOpacity style={styles.backButton}>
        <BackArrow />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AnimatedHeader;
