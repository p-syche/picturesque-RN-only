import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView,
  View,
  Image,
} from 'react-native';

import generalStyles from '../styles/generalStyles';

const ProfileTab = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>My Profile</Text>
      <Image 
        name="profile-pic" 
        source={require('../assets/pic1.jpg')}
        style={styles.profilePic} 
        resizeMode="cover"
      />
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Name</Text>
        <Text style={[styles.text, styles.input]}>Jeremima Bells</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>E-Mail</Text>
        <Text style={[styles.text, styles.input]}>jeremima@bells.org</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Membership</Text>
        <Text style={[styles.text, styles.input]}>Full Pro Extra Stuff</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Number of uploaded photos</Text>
        <Text style={[styles.text, styles.input]}>567</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Member since</Text>
        <Text style={[styles.text, styles.input]}>07/05/2043</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Following</Text>
        <Text style={[styles.text, styles.input]}>48 members</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Number of followers</Text>
        <Text style={[styles.text, styles.input]}>321</Text>
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.label]}>Number of comments</Text>
        <Text style={[styles.text, styles.input]}>98350281</Text>
      </View>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: generalStyles.color.background,
    paddingTop: 40,
    paddingLeft:30
  },
  textBlock: {
    paddingBottom: 20,
  },
  text: {
    color: generalStyles.color.text,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 20,
    color: generalStyles.color.title,
  },
  label: {
    paddingBottom: 5,
    fontSize: 15,
    color: generalStyles.color.dark
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profilePic: {
    // width: 100,
    height: 100,
    marginBottom: 20,
    marginLeft: -30
  }
});

export default ProfileTab;