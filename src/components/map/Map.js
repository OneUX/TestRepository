import React from 'react';
import {View} from 'react-native';
import Button from '../button/Button';
import DirectionIcon from '../../assets/icons/direction.svg';
import MapView from 'react-native-maps';

const PROVIDER_GOOGLE = 'google';

const initialRegion = {
  // Default Region
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function Map({}) {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        // ref={map}
        minZoomLevel={13}
        maxZoomLevel={17}
        style={{width: '100%', height: 195}}
        region={initialRegion}
        showsUserLocation
        showsIndoors={false}
      />
      <Button Icon={DirectionIcon} />
    </View>
  );
}

export default Map;
