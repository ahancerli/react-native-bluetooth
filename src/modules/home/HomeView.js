import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {fonts, colors} from '../../styles';
import {Text} from '../../components/StyledText';

export default function HomeScreen({isExtended, setIsExtended}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover">
        <View style={styles.section}>
          <Text size={20} white>
            Maximodel
          </Text>
        </View>
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
            En iyi Evler Burada
          </Text>
          <Text size={30} bold white style={styles.title}>
            Maximodel
          </Text>
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            obcaecati in officia mollitia veritatis praesentium eaque ipsa nobis
            hic dolor dignissimos harum repellat sit nemo doloribus rerum,
            libero aliquid! Et.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
