import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import AnimatedContent from '../../components/animatedHeader/AnimatedContent';
import AnimatedHeader from '../../components/animatedHeader/AnimatedHeader';
import LogoDisplay from '../../components/animatedHeader/LogoDisplay';
import IconButton from '../../components/iconButton/IconButton';
import styles from './styles';
import ShareIcon from '../../assets/icons/share.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import List from '../../components/list/List';
import TimeIcon from '../../assets/icons/time.svg';
import MapIcon from '../../assets/icons/map.svg';
import RoadIcon from '../../assets/icons/road.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import Map from '../../components/map/Map';

function Home() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <LogoDisplay />
        <AnimatedContent>
          <View style={styles.row}>
            <Text style={styles.heading}>Place Name</Text>

            <View style={[styles.row]}>
              <IconButton marginRight={12} Icon={ShareIcon} />
              <IconButton Icon={Bookmark} />
            </View>
          </View>

          <View style={[styles.row, styles.rating]}>
            <Text style={styles.ratingTxt}>3.1</Text>
            <Rating readonly imageSize={12} />
          </View>

          <List
            text={
              <>
                <Text style={styles.greenTxt}>Open</Text>, Close at 12 AM
              </>
            }
            Icon={TimeIcon}
          />

          <List text={'Storgatan 3, 871 30, Härnös...'} Icon={MapIcon} />
          <List text={'3 km'} Icon={RoadIcon} />
          <List text={'0611 - 10 10 10 '} Icon={PhoneIcon} />

          <Text style={styles.subHeading}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet,
            consectetur Lorem sum dolor sit amet, consectetur Lorem psum dolor
            sit amet, consectetur Lorem ipsum dolor sit et, consectetur.
          </Text>

          <Map />
        </AnimatedContent>
      </ScrollView>
      <AnimatedHeader />
    </>
  );
}

export default Home;
