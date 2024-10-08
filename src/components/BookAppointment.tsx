import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  I18nManager,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const BookAppointment: React.FC = () => {
  const navigation = useNavigation();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;

  const [selected, setSelected] = useState<'individual' | 'couples' | 'teen'>(
    'individual',
  );

  const getImageSource = () => {
    switch (selected) {
      case 'individual':
        return require('../../assets/images/individual.png');
      case 'couples':
        return require('../../assets/images/couples.png');
      case 'teen':
        return require('../../assets/images/teen.png');
      default:
        return require('../../assets/images/individual.png');
    }
  };

  const renderTile = (
    type: 'individual' | 'couples' | 'teen',
    title: string,
    subtitle: string,
  ) => {
    const isSelected = selected === type;
    const tileStyle = isSelected ? styles.selectedTile : styles.tile;

    return (
      <TouchableOpacity onPress={() => setSelected(type)} style={tileStyle}>
        {isSelected ? (
          <LinearGradient
            colors={['#FBFFEE', 'rgba(214, 226, 181, 0.5)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={[styles.tileTitle]}>{title}</Text>
            <Text style={[styles.tileSubtitle]}>{subtitle}</Text>
          </LinearGradient>
        ) : (
          <>
            <Text style={[styles.tileTitle]}>{title}</Text>
            <Text style={[styles.tileSubtitle]}>{subtitle}</Text>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.textContainer, { alignItems: alignItemStyle }]}>
            <Text style={[styles.title]}>{t('bookAppointment.title')}</Text>
            <Text style={[styles.subtitle, { textAlign: textAlignStyle }]}>
              {t('bookAppointment.subtitle')}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('TherapistFormScreen')}
            >
              <Text style={[styles.buttonText]}>
                {t('bookAppointment.buttonText')}
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={getImageSource()}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.selectionContainer}>
        {renderTile(
          'individual',
          t('bookAppointment.individualTitle'),
          t('bookAppointment.individualSubtitle'),
        )}
        {renderTile(
          'couples',
          t('bookAppointment.couplesTitle'),
          t('bookAppointment.couplesSubtitle'),
        )}
        {renderTile(
          'teen',
          t('bookAppointment.teenTitle'),
          t('bookAppointment.teenSubtitle'),
        )}
      </View>
      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicator,
            selected === 'individual' && styles.activeIndicator,
          ]}
        />
        <View
          style={[
            styles.indicator,
            selected === 'couples' && styles.activeIndicator,
          ]}
        />
        <View
          style={[
            styles.indicator,
            selected === 'teen' && styles.activeIndicator,
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
    margin: 16,
    borderColor: '#E5DFFE',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 16,
    width: '70%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 14,
    color: '#888A95',
    marginVertical: 8,
    // borderWidth:1,
    width: '80%',
  },

  button: {
    width: '70%',
    backgroundColor: '#B1C181',
    paddingVertical: 13,
    // paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },

  image: {
    width: 130,
    height: 130,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 15,
  },
  tile: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 3,
  },
  selectedTile: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  gradient: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%',
    borderColor: '#9DB8A1',
    borderWidth: 1,
  },
  tileTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 3,
  },

  tileSubtitle: {
    fontSize: 10,
    color: '#666',
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 15,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 2,
  },
  activeIndicator: {
    backgroundColor: '#9DB8A1',
    width: 33,
  },
});

export default BookAppointment;
