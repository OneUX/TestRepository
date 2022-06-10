import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {Linking, Platform} from 'react-native';

function useGoogleMap() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      pos => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      e => {},
    );
    return () => Geolocation.clearWatch(watchId);
  }, []);

  function openMapDirection() {
    const latitude = position.latitude;
    const longitude = position.longitude;
    const url = Platform.select({
      ios: `comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"`,
      android: `geo://?q=${latitude},${longitude}`,
    });
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          const browser_url = `https://www.google.de/maps/@${latitude},${longitude}`;
          return Linking.openURL(browser_url);
        }
      })
      .catch(() => {
        if (Platform.OS === 'ios') {
          Linking.openURL(`maps://?q=${latitude},${longitude}`);
        }
      });
  }

  return {position, openMapDirection};
}

export default useGoogleMap;
