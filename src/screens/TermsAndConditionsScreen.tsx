import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  I18nManager,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();
  const isRTL = I18nManager.isRTL;
  const textAlignStyle = isRTL ? 'right' : 'left';
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require('../../assets/images/back.png')}
          style={[styles.backArrowIcon, { transform: transformStyle }]}
        />
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { fontSize: 28 }]}>
          Welcome to CalmTalk
        </Text>

        <Text style={styles.sectionTitle}>INTRODUCTION</Text>
        <Text style={styles.paragraph}>
          The following terms and conditions must be followed to access to and
          use the services, content, and functionality provided on the website.
          Access to the site is based on your acceptance of and compliance with
          these terms. You are required to read the terms of service carefully
          and accept them before you start using the site.
        </Text>
        <Text style={styles.paragraph}>
          You must agree to these terms on behalf of yourself, your company,
          association, organization, government, or any other legal entity for
          opening the site, using the account, or clicking to accept the terms &
          services when the option pops up to you. In case, if you do not accept
          the terms & conditions, it is requested to not use the website or
          services.
        </Text>
        <Text style={styles.paragraph}>
          The site is made available to users who are over the age of 13. If you
          are under 13 you may not use the services offered on-site.
        </Text>
        <Text style={styles.paragraph}>
          By using the site, you represent and warrant that a). as an entity you
          are legally bound to the terms of services b). over the age of 13 (of
          legal age) to meet the eligibility criteria c). You or your entity are
          not barred from using or accepting the services and terms under the
          laws of the jurisdiction.
        </Text>

        <Text style={styles.sectionTitle}>SCOPE</Text>
        <Text style={styles.paragraph}>
          These terms govern your access to and use of the services available on
          calmtalk. It must be noted that these terms are void and nullified in
          the case of Third-Party products, which may be governed by their Terms
          of Services.
        </Text>

        <Text style={styles.sectionTitle}>INCORPORATED TERMS</Text>
        <Text style={styles.paragraph}>
          As an integral part of the terms of services, the policies,
          agreements, and guidelines, which are incorporated here must also be
          followed. The incorporated terms to which you must bound to include:
        </Text>
        <Text style={styles.paragraph}>Privacy policy</Text>
        <Text style={styles.paragraph}>Refund terms</Text>
        <Text style={styles.paragraph}>Shipping Policy</Text>
        <Text style={styles.paragraph}>Cookies policy</Text>
        <Text style={styles.paragraph}>Payment Policy</Text>

        <Text style={styles.sectionTitle}>CREATING AN ACCOUNT</Text>
        <Text style={styles.paragraph}>
          You are not required to have an account if you want to search or
          browse products, product reviews, and/or FAQs. However, you are
          required to create an account to place an order and enjoy services,
          special promotions, and activities that are available only for
          registered members. The customer visiting the site must provide
          legitimate and precise data. Any wrong filling of the information may
          result in the suspension of the account without any further notice.
          The customer must provide his/her full name, email address, zip code,
          city, username, etc. The information we take from the customer is
          subject to our privacy policy.
        </Text>
        <Text style={styles.paragraph}>
          Customers are solely responsible for the information they provide.
          calmtalk will not be responsible and won't compensate in case wrong
          information prevents shipment, deliveries, or custom clearance.
        </Text>
        <Text style={styles.paragraph}>
          Each client is permitted to register one account at a time to assure
          safety and security. Multiple creations of accounts may result in the
          suspension of the account.
        </Text>
        <Text style={styles.paragraph}>
          We, and our team, always conform to the laws of the jurisdiction. It
          is requested to customers fulfill the laws in their respective
          countries for the continuous availability of services on site.
        </Text>

        <Text style={styles.sectionTitle}>SECURITY</Text>
        <Text style={styles.paragraph}>
          The customer is responsible for maintaining the account security and
          services ordered or accessed. You are not allowed to share your
          account credentials with a third party.
        </Text>
        <Text style={styles.paragraph}>
          We take the responsibility for the security of credit cardholder
          information as far as we have control over data.
        </Text>
        <Text style={styles.paragraph}>
          calmtalk will provide a technical, social, organizational, and
          physical security environment for customer data stored.
        </Text>

        <Text style={styles.sectionTitle}>CURB LIABILITY</Text>
        <Text style={styles.paragraph}>
          Being allowed by the laws, neither calmtalk nor its members will be
          liable to the customer in case a customer loses revenues or profits.
          We will also be not responsible in case of any significant, indirect,
          or punitive damage that may arise out of the services or terms.
        </Text>

        <Text style={styles.sectionTitle}>INTELLECTUAL PROPERTY RIGHTS</Text>
        <Text style={styles.paragraph}>
          The intellectual property rights in all the content like logo, text,
          graphics, buttons, icons, descriptions, products or images, etc made
          available to you through this website will remain the property of
          calmtalk and will be protected by the copyright laws across the globe.
          You can print, store, and display the content only for your purposes
          solely. It is prohibited for you to manipulate, reproduce, or
          distribute, in any format. Any content that appears on the website is
          prohibited to be used for business or commercial enterprise.
        </Text>
        <Text style={styles.paragraph}>
          calmtalk does not own the content you provide to us and thus does not
          claim any intellectual right to such content. You grant us all the
          trademarks, patents, copyrights, and intellectual rights in case you
          provide content using the services.
        </Text>

        <Text style={styles.sectionTitle}>
          TERMS & CONDITIONS FOR PRICING AND PAYMENT
        </Text>
        <Text style={styles.paragraph}>
          Product prices at calmtalk continue to change from time to time
          without notice. The prices of the products exclude the pricing of
          import tax, duties, and V.A.T. Payment of these is the responsibility
          of the customer.
        </Text>

        <Text style={styles.sectionTitle}>DISPUTE RESOLUTION</Text>
        <Text style={styles.paragraph}>
          Customers must accept that all disputes will be governed by the
          country and the state's law.
        </Text>
        <Text style={styles.paragraph}>
          Clients can cancel their order at any time before the product is
          shipped. Please contact customer support atinfo@calmtalk.com for
          assistance. Keep in mind, that if the order is dispatched you will no
          longer be able to cancel the order. However, we have a separate refund
          policy in case of any damage.
        </Text>

        <Text style={styles.sectionTitle}>CUSTOMER'S CONDUCT</Text>
        <Text style={styles.paragraph}>
          Our team is available 24/7 to assist and satisfy the customer in any
          perspective courteously, politely, and friendly. However, any
          undesirable, unfair, or misconduct towards any of our team members
          will not be tolerated at all.
        </Text>
        <Text style={styles.paragraph}>
          Undesirable, unfair, or misconduct towards our customer care support
          or calmtalk may include the following:
        </Text>
        <Text style={styles.paragraph}>
          Threatening behavior, for example, being aggressive, abusive, racist,
          sexist, unproven allegations, or using menacing language. For example,
          direct or implied threats at any communication level through any
          network.
        </Text>
        <Text style={styles.paragraph}>
          Wrong allegations, persistent complaints despite the matter being
          fully addressed and solved, altering the nature of the complaint,
          and/or demanding unrealistic outcomes beyond the scope of our
          processes and policies. For the behavior listed above, complaints must
          be advised and formally notified the following:
        </Text>
        <Text style={styles.paragraph}>
          The intimidating, aggressive, and abusive language must be considered
          wholly intolerable.
        </Text>
        <Text style={styles.paragraph}>
          Such language must refrain there should not be given a response if
          unacceptable behavior persists.
        </Text>
        <Text style={styles.paragraph}>Thanks for shopping at calmtalk.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: '10%',
  },
  headerText: {
    color: '#523432',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  backArrowIcon: {
    width: 15,
    height: 15,
  },
  content: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#000000',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
});

export default TermsAndConditionsScreen;
