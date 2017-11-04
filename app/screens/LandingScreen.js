import React from 'react'
import Screen from './Screen'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  DeviceEventEmitter,
  TouchableOpacity
} from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import realm from '../db/Schema'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Elevation from '../helpers/Elevation'
import Colors from '../helpers/Colors'
import UploadButton from '../components/UploadButton'
import SnackBarNotice from '../components/SnackBarNotice'
import Observation from '../helpers/Observation'
import File from '../helpers/File'

const plants = [
  {
    title    : 'American Chestnut',
    latinName: 'Castanea dentata',
    image    : require('../img/am_chestnut3.jpg')
  },
  {
    title    : 'Ash',
    latinName: 'Fraxinus sp.',
    image    : require('../img/ash.jpg')
  },
  {
    title    : 'Hemlock',
    latinName: 'Tsuga sp.',
    image    : require('../img/hemlock.jpg')
  },
  {
    title    : 'White Oak',
    latinName: 'Quercus alba',
    image    : require('../img/white_oak.jpg')
  },
  {
    title    : 'American Elm',
    latinName: 'Ulmus americana',
    image    : require('../img/elmleaf.jpg')
  },
  {
    title    : 'Other',
    latinName: 'Other trees that aren\'t listed above',
    image    : require('../img/forest.jpg')
  }
]

export default class LandingScreen extends Screen {
  constructor(props) {
    super(props)

    // Links that always show up
    this.defaultSidebarLinks = [
      {
        icon : 'map-marker-radius',
        title: 'My Entries',
        route: 'Observations'
      },
      {
        icon : 'account-card-details',
        title: 'About Us',
        route: 'About'
      },
      {
        icon : 'sign-caution',
        title: 'Health and Safety',
        route: 'HealthSafety'
      },
      {
        icon : 'lock',
        title: 'Privacy Policy',
        route: 'PrivacyPolicy'
      }
    ]

    // Links that show up when the user is logged in
    this.loggedInLinks = [
      {
        icon : 'account',
        title: 'Account',
        route: 'Account'
      },
      {
        icon   : 'logout-variant',
        title  : 'Logout',
        onPress: this.logout.bind(this)
      }
    ]

    // Links that show up when the user is not logged in
    this.loggedOutLinks = [
      {
        icon : 'account-key',
        title: 'Login',
        route: 'Login'
      }, {
        icon : 'account-plus',
        title: 'Register',
        route: 'Registration'
      }
    ]

    this.state = {
      sidebar     : [],
      userLoggedIn: false,
      noticeText  : 'default message'
    }

    // Hold all events so we can remove them later and prevent memory leaks
    this.events = []
    this.fs     = new File()
  }

  /**
   * Sets the initial sidebar links and listens to events.
   */
  componentDidMount() {
    this.setSidebarLinks()
    this.setState({
      userLoggedIn: this.isLoggedIn()
    })

    this.events.push(DeviceEventEmitter.addListener('userLoggedOut', () => {
      if (this.refs.uploadButton) {
        this.refs.uploadButton.getObservations()
      }
      this.setSidebarLinks()
      this.setState({
        userLoggedIn: false,
        noticeText  : 'Successfully logged out!'
      })
      this.refs.snackbar.showBar()
    }))

    this.events.push(DeviceEventEmitter.addListener('newSubmission', () => {
      if (this.refs.uploadButton) {
        this.refs.uploadButton.getObservations()
      }
    }))

    this.events.push(DeviceEventEmitter.addListener('userLoggedIn', () => {
      this.setState({
        userLoggedIn: true,
        noticeText  : 'Successfully logged in!'
      })
      this.setSidebarLinks()
      this.refs.snackbar.showBar()
      this.downloadObservations()
    }))

    this.events.push(DeviceEventEmitter.addListener('ObservationDeleted', () => {
      if (this.refs.uploadButton) {
        this.refs.uploadButton.getObservations()
      }
    }))

    this.events.push(DeviceEventEmitter.addListener('ObservationUploaded', () => {
      if (this.refs.uploadButton) {
        this.refs.uploadButton.getObservations()
      }
    }))

    this.events.push(DeviceEventEmitter.addListener('userRegistered', () => {
      this.setState({
        userLoggedIn: true,
        noticeText  : 'Successfully registered membership!'
      })
      this.setSidebarLinks()
      this.refs.snackbar.showBar()
    }))
  }

  /**
   * Stop listening
   */
  componentWillUnmount() {
    this.events.forEach(event => {
      event.remove()
    })
  }

  /**
   * Download observations from the server and add them to realm
   * if they don't already exist
   */
  async downloadObservations() {
    let response = await Observation.get()
    let records  = response.data.data

    records.map(record => {
      let primaryKey = parseInt(record.mobile_id)
      let count      = realm.objects('Submission')
        .filtered(`serverID == ${record.observation_id} OR id == ${primaryKey}`)
        .length

      if (count > 0) {
        return
      }

      realm.write(() => {
        realm.create('Submission', {
          id       : primaryKey,
          name     : record.observation_category,
          images   : JSON.stringify(record.images),
          location : record.location,
          date     : moment(record.date.date).format('MM-DD-YYYY HH:mm:ss').toString(),
          synced   : true,
          meta_data: JSON.stringify(record.meta_data),
          serverID : parseInt(record.observation_id)
        })
      })
    })

    try {
      await this.downloadImages()
    } catch (error) {
      console.log('Could not download images: ', error)
    }
  }

  // Download images
  async downloadImages() {
    let observations = realm.objects('Submission')

    return await Promise.all(observations.map(async observation => {
      try {
        await this.fs.download(observation)
      } catch (error) {
        console.log(`Failed to download ${observation.name}`)
      }
    }))
  }

  /**
   * Resets the sidebar links based on logged in status
   */
  setSidebarLinks() {
    if (this.isLoggedIn()) {
      this.setState({
        sidebar: [
          ...this.defaultSidebarLinks,
          ...this.loggedInLinks
        ]
      })
      return
    }

    this.setState({
      sidebar: [
        ...this.loggedOutLinks,
        ...this.defaultSidebarLinks
      ]
    })
  }

  /**
   * Logs the user out after confirming the click.
   */
  logout() {
    //Set alert text
    let observations = realm.objects('Submission').filtered('synced == false')
    let alertText    = {
      label    : 'Log out',
      labelText: 'Are you sure you would like to log out?',
      cancel   : 'Cancel',
      confirm  : 'Log out'
    }
    if (observations.length > 0) {
      alertText = {
        label    : 'Warning',
        labelText: 'You have observations that are not uploaded.  If you log out, these observations will be deleted permanently.',
        cancel   : 'Cancel',
        confirm  : 'Log out'
      }
    }
    Alert.alert(
      alertText.label,
      alertText.labelText, [
        {
          text: alertText.confirm, style: 'destructive',
          onPress                       : () => {
            // Deletes all user records thus logging out
            realm.write(() => {
              let user = realm.objects('User')
              realm.delete(user)

              let submissions = realm.objects('Submission')
              submissions.map((submission) => {
                let images = JSON.parse(submission.images)
                this.fs.delete(images)
              })
              realm.delete(submissions)
            })
            DeviceEventEmitter.emit('userLoggedOut')
          }
        },
        {text: alertText.cancel, style: 'cancel'}
      ])
  }

  /**
   * Checks if the user is logged in.
   *
   * @returns {boolean}
   */
  isLoggedIn() {
    return (realm.objects('User').length > 0)
  }

  /**
   * Toggle sidebar menu (show/hide)
   */
  toggleMenu() {
    this.sidebar.toggleMenu()
  }

  /**
   * Render login button.
   *
   * @returns {XML}
   */
  loginButton() {
    return (
      <TouchableOpacity style={[styles.button, {marginHorizontal: 5}]}
                        onPress={() => this.navigator.navigate('Login')}>
        <Text style={styles.buttonText}>Login to upload your entries</Text>
      </TouchableOpacity>
    )
  }

  /**
   * Notify user of updated observation.
   */
  uploadCompleted() {
    this.setState({noticeText: 'Observations Uploaded'})
    this.refs.snackbar.showBar()
  }

  /**
   * Show error message if upload is unsuccessful.
   */
  uploadError() {
    this.setState({noticeText: 'Network error. Try again later.'})
    this.refs.snackbar.showBar()
  }

  render() {
    return (
      <View style={styles.container} {...(this.sidebar ? this.sidebar.getPan() : {})}>
        <Header
          title="Overview"
          navigator={this.navigator}
          initial={true}
          onMenuPress={this.toggleMenu.bind(this)}
          sidebar={this.sidebar}/>
        <Sidebar
          ref={ref => this.sidebar = ref}
          navigator={this.navigator}
          routes={this.state.sidebar}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.plantsContainer}>
            {this.state.userLoggedIn ?
              <UploadButton ref="uploadButton" onUploadDone={this.uploadCompleted.bind(this)}
                            onError={this.uploadError.bind(this)}/> :
              this.loginButton.call(this)
            }

            {plants.map((plant, index) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={index}
                  onPress={() => {
                    this.navigator.navigate('Tree', {title: plant.title})
                  }}>
                  <View style={[styles.flexHorizontal]}>
                    <Image source={plant.image} style={styles.cardImage}/>
                    <View style={[styles.cardBody, styles.flexHorizontal, styles.flexSpace]}>
                      <View>
                        <Text style={styles.cardTitle}>
                          {plant.title}
                        </Text>
                        <Text
                          style={plant.title !== 'Other' ? [styles.cardBodyText, styles.italics] : styles.cardBodyText}>
                          {plant.latinName}
                        </Text>
                      </View>
                      <View>
                        <Icon name="ios-arrow-forward" size={24} style={styles.icon}/>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
        <SnackBarNotice ref="snackbar" noticeText={this.state.noticeText}/>
      </View>
    )
  }
}

const elevationStyle = new Elevation(2)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex           : 1,
    flexDirection  : 'column'
  },

  flexHorizontal: {
    flexDirection: 'row'
  },

  flexSpace: {
    justifyContent: 'space-between'
  },

  card: {
    ...elevationStyle,
    backgroundColor : '#fff',
    marginBottom    : 10,
    marginHorizontal: 5,
    borderRadius    : 3
  },

  cardImage: {
    resizeMode: 'cover',
    flex      : 0,
    height    : 70,
    width     : 70
  },

  cardTitle: {
    backgroundColor: '#fff',
    fontSize       : 16,
    flex           : 0,
    paddingLeft    : 5,
    fontWeight     : '500',
    marginBottom   : 5,
    color          : '#444'
  },

  cardBody: {
    flexDirection: 'column',
    flex         : 1,
    padding      : 5,
    alignItems   : 'center'
  },

  cardBodyText: {
    color        : '#777',
    paddingBottom: 10,
    paddingLeft  : 5,
    fontSize     : 14
  },

  icon: {
    color: '#777',
    width: 20
  },

  plantsContainer: {
    //marginHorizontal: 5,
    flex           : 1,
    flexDirection  : 'column',
    paddingVertical: 10
  },

  button: {
    ...(new Elevation(2)),
    paddingVertical  : 15,
    paddingHorizontal: 10,
    marginBottom     : 10,
    backgroundColor  : Colors.warning,
    borderRadius     : 2
  },

  cardButton: {
    marginBottom   : 0,
    flex           : 1,
    marginLeft     : 5,
    paddingVertical: 10,
    backgroundColor: Colors.primary
  },

  buttonText: {
    color     : Colors.warningText,
    fontWeight: '500',
    textAlign : 'center'
  },

  cardButtonText: {
    color: Colors.primaryText
  },

  italics: {
    fontStyle: 'italic'
  },

  buttonLink: {
    backgroundColor: 'transparent',
    shadowColor    : 'transparent'
  },

  buttonLinkText: {
    color          : Colors.primary,
    textShadowColor: 'transparent'
  }
})