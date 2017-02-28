import React, {Component, PropTypes} from 'react'
import {
  View,
  Navigator,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import {getTheme} from 'react-native-material-kit'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Icon from 'react-native-vector-icons/Ionicons'
import Elevation from '../helpers/Elevation'
import Colors from '../helpers/Colors'

const theme  = getTheme()
const plants = [
  {
    title: 'American Chestnut',
    image: require('../img/am_chestnut4.jpg'),
    description: {
      latinName: 'A. chestnuticus',
      descriptionBody: 'This is where the body text would go describing the Tree.',
      collectionInstructions: 'This is where the specific collection instructions would go.  Only collect disease trees for this species!'
    }
  },
  {
    title: 'Green Ash',
    image: require('../img/ash.jpg'),
  },
  {
    title: 'Hemlock',
    image: require('../img/hemlock.jpg'),
  },
  {
    title: 'White Oak',
    image: require('../img/white_oak.jpg'),
  }
]

const sidebarLinks = [
  {
    title: 'Home',
    index: 0
  },
]


export default class TreeDescriptionScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'hello'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={this.props.title}
          navigator={this.props.navigator}
          initial={true}
          onMenuPress={this.toggleMenu.bind(this)}/>
        <Sidebar
          ref="sidebar"
          navigator={this.props.navigator}
          routes={sidebarLinks}/>

      </View>
    )
  }

  toggleMenu() {
    this.refs.sidebar.toggleMenu()
  }
}

  TreeDescriptionScene.propTypes = {
  title    : PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
}

const elevationStyle = new Elevation(2)
const iconElevation  = new Elevation(2)

const styles = StyleSheet.create({
  container      : {
    backgroundColor: '#f5f5f5',
    flex           : 1,
    flexDirection  : 'column'
  },
  card           : {
    ...theme.cardStyle,
    ...elevationStyle,
    marginBottom: 10,
    borderRadius: 3
  },
  cardImage      : {
    ...theme.cardImageStyle,
    height              : 150,
    resizeMode          : 'cover',
    width               : undefined,
    borderTopRightRadius: 3,
    borderTopLeftRadius : 3,
    backgroundColor     : '#fff',
  },
  cardTitle      : {
    ...theme.cardTitleStyle,
    fontSize: 14,
    flex    : 50,
    padding : 0,
    position: undefined,
    top     : 0,
    left    : 0
  },
  cardBody       : {
    flexDirection : 'row',
    flex          : 1,
    padding       : 10,
    alignItems    : 'center',
    justifyContent: 'center'
  },
  icon           : {
    backgroundColor: 'transparent'
  },
  plantsContainer: {
    marginHorizontal: 5,
    flex            : 1,
    flexDirection   : 'column',
    paddingVertical : 10
  }
})
