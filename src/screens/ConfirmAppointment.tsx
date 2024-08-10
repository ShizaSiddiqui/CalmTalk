import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
  I18nManager,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const ConfirmAppointment = ({ navigation }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [billingCountry, setBillingCountry] = useState('Pakistan');
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];
  const alignSelfStyle = isRTL ? 'flex-start' : null;

  const togglePaymentModal = () => {
    setPaymentModalVisible(!isPaymentModalVisible);
  };

  const handlePayment = () => {
    togglePaymentModal();
    setSuccessModalVisible(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={[styles.backIcon, { transform: transformStyle }]}
            />
          </TouchableOpacity>
          <Text style={[styles.headerText]}>
            {t('confirmAppointment.title')}
          </Text>
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/doctor.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={[styles.doctorName, { textAlign: textAlignStyle }]}>
              {t('confirmAppointment.doctorName')}
            </Text>
            <Text style={styles.doctorTitle}>
              {t('confirmAppointment.doctorTitle')}
            </Text>
          </View>
        </View>

        <View style={styles.bookingContainer}>
          <Text style={[styles.bookingTitle, { textAlign: textAlignStyle }]}>
            {t('confirmAppointment.bookingDetails')}
          </Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {t('confirmAppointment.package')}
            </Text>
            <View style={styles.packageDetail}>
              <Text style={styles.packageText}>
                {t('confirmAppointment.packageDetail')}
              </Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {t('confirmAppointment.date')}
            </Text>
            <View style={styles.detailWithButton}>
              <Text style={styles.detailText}>09-05-2024</Text>
              <TouchableOpacity style={styles.editButton} onPress={() => {}}>
                <Text style={styles.editButtonText}>
                  {t('confirmAppointment.edit')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {t('confirmAppointment.timeslot')}
            </Text>
            <View style={styles.detailWithButton}>
              <Text style={styles.detailText}>5:00 PM - 6:00 PM</Text>
              <TouchableOpacity style={styles.editButton} onPress={() => {}}>
                <Text style={styles.editButtonText}>
                  {t('confirmAppointment.edit')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              {t('confirmAppointment.price')}
            </Text>
            <Text style={styles.detailText}>50.00 USD</Text>
          </View>
        </View>

        <View style={styles.promoContainer}>
          <TextInput
            placeholder={t('confirmAppointment.promoCode')}
            placeholderTextColor={'lightgray'}
            style={[styles.promoInput, { textAlign: isRTL ? 'right' : 'left' }]}
          />
          <TouchableOpacity style={styles.applyButton} onPress={() => {}}>
            <Text style={styles.applyButtonText}>
              {t('confirmAppointment.apply')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentContainer}>
          <Text style={[styles.bookingTitle, { alignSelf: alignSelfStyle }]}>
            {t('confirmAppointment.paymentMethod')}
          </Text>
          <Text style={[styles.subText, { alignSelf: alignSelfStyle }]}>
            {t('confirmAppointment.secureTransactions')}
          </Text>

          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedPaymentMethod === 'card' && styles.selectedPaymentOption,
            ]}
            onPress={() => setSelectedPaymentMethod('card')}
          >
            <Image
              source={require('../../assets/images/masterCard_pay.png')}
              style={styles.paymentImage}
              resizeMode="contain"
            />
            <Text style={[styles.paymentText, { textAlign: textAlignStyle }]}>
              {t('confirmAppointment.payWithCard')}
            </Text>
            {selectedPaymentMethod === 'card' && (
              <Image
                source={require('../../assets/images/checkmark_payment.png')}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedPaymentMethod === 'google' &&
                styles.selectedPaymentOption,
            ]}
            onPress={() => setSelectedPaymentMethod('google')}
          >
            <Image
              source={require('../../assets/images/google_pay.png')}
              style={styles.paymentImage}
              resizeMode="contain"
            />
            <Text style={[styles.paymentText, { textAlign: textAlignStyle }]}>
              {t('confirmAppointment.googlePay')}
            </Text>
            {selectedPaymentMethod === 'google' && (
              <Image
                source={require('../../assets/images/checkmark_payment.png')}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentOption,
              selectedPaymentMethod === 'apple' && styles.selectedPaymentOption,
            ]}
            onPress={() => setSelectedPaymentMethod('apple')}
          >
            <Image
              source={require('../../assets/images/apple_pay.png')}
              style={styles.paymentImage}
              resizeMode="contain"
            />
            <Text style={[styles.paymentText, { textAlign: textAlignStyle }]}>
              {t('confirmAppointment.applePay')}
            </Text>
            {selectedPaymentMethod === 'apple' && (
              <Image
                source={require('../../assets/images/checkmark_payment.png')}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={togglePaymentModal}
        >
          <Text style={styles.confirmButtonText}>
            {t('confirmAppointment.confirm')}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={isPaymentModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={togglePaymentModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {t('confirmAppointment.addCardInfo')}
                </Text>
                <TouchableOpacity onPress={togglePaymentModal}>
                  <Text style={styles.closeButton}>X</Text>
                </TouchableOpacity>
              </View>

              <TextInput
                placeholder={t('confirmAppointment.cardNumber')}
                placeholderTextColor={'lightgray'}
                style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
              />
              <View style={styles.expiryCVCRow}>
                <TextInput
                  placeholder={t('confirmAppointment.expiryDate')}
                  placeholderTextColor={'lightgray'}
                  style={[
                    styles.input,
                    styles.halfInput,
                    { textAlign: isRTL ? 'right' : 'left' },
                  ]}
                />
                <TextInput
                  placeholder={t('confirmAppointment.cvc')}
                  placeholderTextColor={'lightgray'}
                  style={[
                    styles.input,
                    styles.halfInput,
                    { textAlign: isRTL ? 'right' : 'left' },
                  ]}
                />
              </View>

              <RNPickerSelect
                onValueChange={(value) => setBillingCountry(value)}
                items={[
                  { label: 'Pakistan', value: 'Pakistan' },
                  { label: 'United States', value: 'United States' },
                  { label: 'United Kingdom', value: 'United Kingdom' },
                  // Add more countries as needed
                ]}
                style={pickerSelectStyles}
                value={billingCountry}
                placeholder={{
                  label: t('confirmAppointment.countryOrRegion'),
                  value: null,
                }}
              />

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isCheckboxChecked}
                  onValueChange={setCheckboxChecked}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>
                  {t('confirmAppointment.saveInfo')}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.payButton}
                onPress={handlePayment}
              >
                <Text style={styles.payButtonText}>
                  {t('confirmAppointment.payAmount', { amount: 50.0 })}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Success Modal */}
        <Modal
          visible={isSuccessModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={closeSuccessModal}
        >
          <View style={styles.successModalContainer}>
            <View style={styles.successModalContent}>
              <View style={styles.successModalHeader}>
                <Image
                  source={require('../../assets/images/payment_success.png')}
                  style={styles.successImage}
                />
                <TouchableOpacity
                  onPress={closeSuccessModal}
                  style={{ position: 'absolute', right: 0, top: 0 }}
                >
                  <Text style={styles.closeButton}>X</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.successMessage}>
                {t('confirmAppointment.successMessage', { name: 'John' })}
              </Text>
              <Text style={styles.appointmentDetails}>
                5:00 PM - 6:00 PM | Dr. John Mark
              </Text>
              <Text style={styles.appointmentDate}>
                {t('confirmAppointment.appointmentDate')}
              </Text>

              <View style={styles.separator} />

              <Text style={styles.cancellationPolicy}>
                {t('confirmAppointment.cancellationPolicy')}
              </Text>

              <View style={styles.successButtonContainer}>
                <TouchableOpacity
                  style={styles.backHomeButton}
                  onPress={() => {
                    closeSuccessModal();
                    navigation.navigate('Home');
                  }}
                >
                  <Text style={styles.backHomeButtonText}>
                    {t('confirmAppointment.backHome')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.myAppointmentsButton}
                  onPress={() => {}}
                >
                  <Text style={styles.myAppointmentsButtonText}>
                    {t('confirmAppointment.myAppointments')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileDetails: {
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  doctorTitle: {
    fontSize: 14,
    color: 'gray',
  },
  bookingContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#23232399',
  },
  packageDetail: {
    backgroundColor: '#9DB8A1',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  packageText: {
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  detailWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#D5D7DD80',
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },
  editButtonText: {
    color: '#232323B2',
    fontSize: 13,
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  promoInput: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 13,
  },
  applyButton: {
    backgroundColor: '#B1C181',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: 'white',
  },
  paymentContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  subText: {
    fontSize: 13,
    color: '#23232380',
    marginBottom: 10,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPaymentOption: {
    backgroundColor: '#4BB543FC',
  },
  paymentImage: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 14,
    flex: 1,
  },
  checkIcon: {
    width: 20,
    height: 20,
  },
  confirmButton: {
    backgroundColor: '#B1C181',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  expiryCVCRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  payButton: {
    backgroundColor: '#B1C181',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appointmentDetails: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
  appointmentDate: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  successButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  successModalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  successModalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  successModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
    marginLeft: '35%',
    alignSelf: 'center',
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  backHomeButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#B1C181',
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  backHomeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  myAppointmentsButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B1C181',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  myAppointmentsButtonText: {
    color: '#B1C181',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancellationPolicy: {
    textAlign: 'center',
    marginVertical: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
});

export default ConfirmAppointment;
