import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles';
import FoodLogo from '../../assets/icons/foodLogo.svg';
function LogoDisplay() {
  return (
    <ImageBackground style={styles.headerBG}>
      <FoodLogo />
    </ImageBackground>
  );
}

export default LogoDisplay;
