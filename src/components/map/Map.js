import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../button/Button';
import DirectionIcon from '../../assets/icons/direction.svg';
import MapView, {Marker} from 'react-native-maps';
import MapStyle from '../../constants/MapStyle';
import useGoogleMap from '../../hooks/useGoogleMap';
import LocationPin from '../../assets/icons/locationPin.svg';
import FoodLogo from '../../assets/icons/locationFood.svg';

const PROVIDER_GOOGLE = 'google';

function CustomMarker(params) {
  return (
    <View>
      <LocationPin />
      <View style={styles.foodIcon}>
        <FoodLogo fill="#000" width={27} height={27} />
      </View>
    </View>
  );
}

function Map({}) {
  const {position, openMapDirection} = useGoogleMap();
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        // ref={map}
        minZoomLevel={13}
        maxZoomLevel={17}
        customMapStyle={MapStyle}
        style={styles.map}
        region={position}
        followsUserLocation
        showsUserLocation>
        <Marker coordinate={position}>
          <CustomMarker />
        </Marker>
      </MapView>
      <Button onPress={openMapDirection} Icon={DirectionIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  foodIcon: {
    position: 'absolute',
    top: 6,
    left: 6,
  },
  map: {
    width: '100%',
    height: 195,
    marginBottom: 18,
  },
});
export default Map;
