
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class PrivacyandLicenses extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.text} h3>Privacy Policy</Text>
          <Text style={styles.text}>Hochenmu Global Services built the At-tareeq app as a Free app. This SERVICE is provided by Hochenmu Global Services at no cost and is intended for use as is.</Text>
          <Text style={styles.text}>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</Text>
          <Text style={styles.text}>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</Text>
          <Text style={styles.text}>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at At-tareeq unless otherwise defined in this Privacy Policy.</Text>

          <Text style={styles.text} h4>Information Collection and Use</Text>
          <Text style={styles.text}>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Photo, Full names, Phone number, Email address, Location. The information that we request will be retained by us and used as described in this privacy policy.</Text>
          <Text style={styles.text}>The app does use third party services that may collect information used to identify you.</Text>
          <Text style={styles.text}>Link to privacy policy of third party service providers used by the app</Text>
          <Text style={styles.list}>- Google Play Services</Text>
          <Text style={styles.list}>- Facebook</Text>
          <Text style={styles.list}>- Twitter</Text>
          <Text style={styles.list}>- LinkedIn</Text>
          
          <Text style={styles.text} h4>Log Data</Text>
          <Text style={styles.text}>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</Text>

          <Text style={styles.text} h4>Cookies</Text>
          <Text style={styles.text}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</Text>
          <Text style={styles.text}>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</Text>

          <Text style={styles.text} h4>Service Providers</Text>
          <Text style={styles.text}>We may employ third-party companies and individuals due to the following reasons:</Text>
          <Text style={styles.list}>- To facilitate our Service;</Text>
          <Text style={styles.list}>- To provide the Service on our behalf;</Text>
          <Text style={styles.list}>- To perform Service-related services; or</Text>
          <Text style={styles.list}>- To assist us in analyzing how our Service is used.</Text>
          <Text style={styles.text}>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Text>

          <Text style={styles.text} h4>Security</Text>
          <Text style={styles.text}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Text>

          <Text style={styles.text} h4>Links to Other Sites</Text>
          <Text style={styles.text}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>

          <Text style={styles.text} h4>Children’s Privacy</Text>
          <Text style={styles.text}>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</Text>

          <Text style={styles.text} h4>Changes to This Privacy Policy</Text>
          <Text style={styles.text}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</Text>

          <Text style={styles.text} h4>Contact Us</Text>
          <Text style={styles.text}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at Hochenmu Global Services. Email: info@hochenmu.ng, Phone: +234 (0)708 844 4443, +234 (0)809 199 1964.</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginVertical: wp('1.3%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('4%'),
    fontFamily: 'sans-serif-light',
  },
  list: {
    paddingHorizontal: wp('6%'),
    fontSize: wp('3.2%'),
    fontFamily: 'sans-serif-light',
  }
});

export default PrivacyandLicenses;