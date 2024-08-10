import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
  const navigation = useNavigation();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];
  const alignSelfStyle = isRTL ? 'flex-start' : null;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/images/back.png')}
            style={[styles.backIcon, { transform: transformStyle }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            source={require('../../assets/images/lavender-oil-image.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.productName, { textAlign: textAlignStyle }]}>
          {t('productDetailsScreen.productName')}
        </Text>
        <Text
          style={[styles.productBenefitsTitle, { alignSelf: alignSelfStyle }]}
        >
          {t('productDetailsScreen.productBenefitsTitle')}
        </Text>
        <View style={styles.productBenefitsContainer}>
          <View style={styles.productBenefit}>
            <View style={styles.productBenefitCheckmark}>
              <Image
                source={require('../../assets/images/checkmark_payment.png')}
                style={styles.bulletsImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.productBenefitText}>
              {t('productDetailsScreen.productBenefits.benefit1')}
            </Text>
          </View>
          <View style={styles.productBenefit}>
            <View style={styles.productBenefitCheckmark}>
              <Image
                source={require('../../assets/images/checkmark_payment.png')}
                style={styles.bulletsImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.productBenefitText}>
              {t('productDetailsScreen.productBenefits.benefit2')}
            </Text>
          </View>
          <View style={styles.productBenefit}>
            <View style={styles.productBenefitCheckmark}>
              <Image
                source={require('../../assets/images/checkmark_payment.png')}
                style={styles.bulletsImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.productBenefitText}>
              {t('productDetailsScreen.productBenefits.benefit3')}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>
            {t('productDetailsScreen.buyButton')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  backButton: {
    marginTop: 30,
    marginLeft: 20,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productImageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  productImage: {
    width: '95%',
    height: 250,
    borderRadius: 10,
  },
  aromaTherapyTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#696969',
    padding: 5,
    borderRadius: 10,
  },
  aromaTherapyText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  bulletsImage: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productBenefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productBenefitsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  productBenefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productBenefitCheckmark: {
    width: 25,
    height: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productBenefitCheckmarkText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  productBenefitText: {
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#B1C181',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProductDetails;
