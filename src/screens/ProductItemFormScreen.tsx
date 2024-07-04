import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/images/back.png')}
          style={styles.backIcon}
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
      <Text style={styles.productName}>
        Lavender Essential Oil, Soothing Aromatheray Scent - 5 Fluid Ounce
      </Text>
      <Text style={styles.productBenefitsTitle}>Product benefits</Text>
      <View style={styles.productBenefitsContainer}>
        <View style={styles.productBenefit}>
          <View style={styles.productBenefitCheckmark}>
            <Image
              source={require('../../assets/images/checkmark_payment.png')}
              style={styles.bulletsImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.productBenefitText}>Promotes relaxation</Text>
        </View>
        <View style={styles.productBenefit}>
          <View style={styles.productBenefitCheckmark}>
            <Image
              source={require('../../assets/images/checkmark_payment.png')}
              style={styles.bulletsImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.productBenefitText}>Eases anxiety</Text>
        </View>
        <View style={styles.productBenefit}>
          <View style={styles.productBenefitCheckmark}>
            <Image
              source={require('../../assets/images/checkmark_payment.png')}
              style={styles.bulletsImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.productBenefitText}>Improves mood</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy on amazon</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
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
    width: 350,
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
    // textAlign: 'center',
    marginTop: 20,
  },
  productBenefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,

    // textAlign: 'center',
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
    // backgroundColor: '#00B050',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
