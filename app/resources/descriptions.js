import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Atext from '../components/Atext'

const styles = StyleSheet.create({
  paragraph: {
    fontSize       : 14,
    paddingVertical: 8,
    paddingLeft    : 5,
    paddingRight   : 5,
    color          : '#333',
    lineHeight     : 21
  }
})

const Plants = {
  'American Chestnut': {
    image           : require('../img/am_chestnut4.jpg'),
    latinName       : 'Castanea dentata',
    images          : [
      require('../img/chestnut_id/4.jpg'),
      require('../img/chestnut_id/1.jpg'),
      require('../img/chestnut_id/2.jpg'),
      require('../img/chestnut_id/3.jpg')
    ],
    captions        : [
      "Chestnut leaves are straight with large, widely spaced and often hooked serrations on their margins. Photo credit: Linda Haugen, USDA Forest Service, Bugwood.org",
      "Chestnut flowers, called catkins are abundant and white. Photo credit: USDA Forest Service Southern Research Station , USDA Forest Service, SRS, Bugwood.org",
      "Chestnut fruits (called burs) are covered with spikes. Photo credit: Paul Wray, Iowa State University, Bugwood.org",
      "The insides of burs have large brown nuts. Photo credit: USDA Forest Service Southern Research Station, Bugwood.org"
    ],
    maps            : [require('../img/maps/am_chestnut_map.png')],
    descriptionCards: [
      {
        title : 'Species',
        body  : [<Text style={styles.paragraph}>American chestnut: <Text style={{fontStyle: 'italic'}}>Castanea dentata </Text></Text>],
        images: []
      }, {
        title : 'Introduction',
        body  : [<Text style={styles.paragraph}>American chestnut was once a dominant tree in eastern North American forests but a deadly fungal disease wiped out most of these trees in the early 1900s. Help us find resistant trees by tagging healthy chestnut trees. <Text style={{fontWeight: 'bold'}}>Please note you must mail a twig sample to the American Chestnut Foundation for your tagged trees to be used in their studies. </Text> Please read below for sample collection and shipping instructions.</Text>],
        images: []
      },
      {
        title : 'Description',
        body  : [
          <Text
            style={styles.paragraph}>The leaves of American chestnut are straight with large, widely spaced, often hooked, serrations on their edges. Chestnut fruits are large, green and covered with spikes on the outside, bearing three large nuts on the inside. Chestnut produces long cadkins made up of many small, pale green flowers. American chestnut twigs are hairless, reddish brown and have small white lenticels. While it is relatively common to find stump-sprouting chestnuts that have been killed by blight, health mature American chestnut trees are very rare unless outside the tree’s native range.</Text>,
          <Text style={styles.paragraph}>To learn more about identifying American chestnut and distinguishing it from similar species <Atext url="https://www.acf.org/resources/identification/">please visit the American Chestnut Foundation website.</Atext></Text>
        ],
        images: []
      }, {
        images: [
          require('../img/DCP/ChestnutBlight/Chestnut_blight.jpg')
        ],
        title : 'Chestnut blight',
        body  : [<Text style={styles.paragraph}>Chestnut blight is caused by the fungus <Text style={{fontStyle: 'italic'}}>Cryphonectria parasitica</Text>. It was introduced to North America in the early 1900s by accidentally importing infected Asian chestnut trees. Most Asian chestnuts are quite resistant to the fungus but American chestnut proved highly susceptible and by 1940 few mature chestnut trees were left.
          The fungus that causes chestnut blight grows in the vascular system of the tree, forming a canker and eventually girdling the tree. Symptoms of chestnut blight include cracked bark, sunken cankers, and fungal structures.</Text>,
          <Text style={styles.paragraph}>Several breeding programs exist to develop trees that are resistant to chestnut blight. Many of these rely of hybridizing American chestnuts with resistant Chinese of Japanese chestnuts and then back crossing to American chestnut. In addition, there has been success in producing transgenic chestnut trees with genes from wheat that provide resistance.
            Our hope is that this reporting app will let members of the public identify chestnut trees that have some natural resistance to chestnut blight. We will then collect seeds from these trees and add them to tree breeding programs to try and propagate resistant trees to use in forest restoration.</Text>]
      },
      {
        title : 'Collection Instructions',
        body  : [
          <Text style={styles.paragraph}>In order for the American Chestnut Foundation to confirm your sample, you must mail in a plant sample. When submitting an observation, please collect a leaf and twig sample. The sample should be collected and preserved as described below.</Text>,

          <Text style={styles.paragraph}> {'\u2022'} A 6-12" twig and attached, mature, green leaves growing in the full sun. </Text>,
          <Text style={styles.paragraph}>  {'\u2022'} Press the sample flat between sheets of cardboard and place in an envelope.</Text>,
          <Text style={styles.paragraph}>
            {'\u2022'} Use a single paper towel between the sample and cardboard to cushion and absorb moisture.
          </Text>,
          <Text style={styles.paragraph}>
            {'\u2022'} Do not wrap in plastic, as samples will mold in the mail.
          </Text>,
          <Text style={styles.paragraph}>
            {'\u2022'} Do not ship overnight. It's not necessary and we won't ID your sample right away.
          </Text>,
          <Text style={styles.paragraph}>
            Submission address - please choose the office closest to the tree located.
            Tom Saielli, The American Chestnut Foundation, 50 N. Merrimon Ave, Suite 115, Asheville, NC 28804
          </Text>,
          <Text style={styles.paragraph}>
            Matt Brinckman, VA DOF, 900 Natural Resources Drive, Charlottesville, VA 22903
          </Text>,
          <Text style={styles.paragraph}>
            Sara Fitzsimmons, Pennsylvania State University, 206 Forest Resources Lab, University Park, PA 16802
          </Text>,
          <Text style={styles.paragraph}>
            Kendra Collins, USFS Northern Research Station, 705 Spear St, South Burlington, VT 05403
          </Text>
        ],
        images: []
      },
    ],
    formProps       : {
      burrs              : true,
      catkins            : true,
      chestnutBlightSigns: true,
      // surroundings       : true,
      // accessibility      : true,
      crownHealth        : true,
      diameterNumeric    : true,
      heightNumeric      : true
    }
  },
  'Ash'              : {
    image           : require('../img/ash.jpg'),
    latinName       : 'Fraxinus sp.',
    images          : [
      require('../img/ash_id/ash_bark.jpg'),
      require('../img/ash_id/ash_buds.jpg'),
      require('../img/ash_id/ash_leaves.jpg'),
      require('../img/ash_id/ash_seeds.jpg'),
    ],
    maps            : [
      require('../img/maps/ash_fraxamer_range.png'),
      require('../img/maps/ash_fraxnigr_range.png'),
      require('../img/maps/ash_fraxpenn_range.png'),
      require('../img/maps/ash_fraxquad_range.png')
    ],
    descriptionCards: [
      {
        title : 'Species',
        body  : [<Text style={styles.paragraph}>While there are many different ash species present in North America, the most common include:</Text>,
          <Text style={styles.paragraph}>white ash (<Text style={{fontStyle: 'italic'}}>Fraxinus americana</Text>)</Text>,
          <Text style={styles.paragraph}>green ash (<Text style={{fontStyle: 'italic'}}>Fraxinus pennsylvanica</Text>)</Text>,
          <Text style={styles.paragraph}>black ash (<Text style={{fontStyle: 'italic'}}>Fraxinus nigra</Text>)</Text>,
          <Text style={styles.paragraph}>blue ash (<Text style={{fontStyle: 'italic'}}>Fraxinus quadrangulata</Text>)</Text>],
        images: []
      },
      {
        title : 'Overview',
        body  : [<Text style={styles.paragraph}>There are several different species of American ash trees, all of which are susceptible to the deadly emerald ash borer. Help us find resistant trees by tagging healthy ash trees.</Text>],
        images: []
      },
      {
        title : 'Description',
        body  : [
          <Text
            style={styles.paragraph}>Ash trees share several features that can be used to distinguish them from other tree species. Ash trees have an opposite branching pattern, where buds are positioned opposite each other on twigs. Ash trees also have compound leaves. Compound leaves are made up of many leaflets, each of which looks like a leaf. However leaves and leaflets can be distinguished because buds are only found at the base of the overall leaf, and not each individual leaflet. Ashes typically have 5-9 leaflets per leaf, although this varies by species. In addition, mature ash trees have a characteristic diamond pattern to their bark and ash seeds are distinctively shaped.</Text>],
        images: []
      }, {
        title : 'Range',
        body  : [<Text style={styles.paragraph}>Ash trees are present throughout Eastern and Midwestern North America. Different ash species have different distributions within this range</Text>],
        images: []
      },
      {
        title : 'Distinguishing different ash species',
        body  : [<Text style={styles.paragraph}>Leaf scars, twig shape, and species range can be very helpful in distinguishing ash tree species.</Text>,
          <Text
            style={styles.paragraph}>Green ash has a leaf scar below the bud while white ash has a leaf scar that wraps around the bud and is more “U”-shaped. In addition, white ash leaflets are white-colored on the undersides while green ash leaflets are green or rusty on their undersides. Blue ash can be distinguished by its thick square-shaped twigs which are often winged. Black ash has a leaf scar similar to green ash but leaflets are directly attached to the petiole without stalks to connect them. In addition, black ash has a more northern range and is typically found in wet sites.</Text>,
          <Atext style={styles.paragraph} url="https://www.ars.usda.gov/midwest-area/ames/plant-introduction-research/docs/npgs-ash-conservation-project/identifying-ash/">Read more here.</Atext>
        ],
        images: []
      }, {
        title : 'Emerald ash borer',
        body  : [<Text style={styles.paragraph}>The reason we are looking for health ash trees is that an invasive insect, the emerald ash borer, is currently moving through North America and killing ash trees. The larvae of this beetle feed on the inner bark of ash trees, cutting off the tree’s flow of water and nutrients and eventually killing the tree. All American ash species are susceptible to the Emerald Ash Borer and so far there is very little natural resistance to the insect in our trees. </Text>,
          <Text style={styles.paragraph}>Our hope is that this reporting app will let members of the public identify ash trees that are lingering after the emerald ash borer’s arrival and which may have some natural resistance. We will then collect seeds from these trees and add them to tree breeding programs to try and propagate resistant trees that are not killed by the emerald ash borer to use in forest restoration.</Text>,
          <Atext style={styles.paragraph} url=": http://www.hungrypests.com/the-threat/emerald-ash-borer.php">Read more about the emerald ash borer here</Atext>
        ],
        images: [
          require('../img/DCP/EmAshBorer/EAB tunneling.jpg'),
          require('../img/DCP/EmAshBorer/Emerald ash borer adult.jpg')
        ]
      }
    ],
    formProps       : {
      ashSpecies             : true,
      locationCharacteristics: true,
      seedsBinary            : true,
      flowersBinary          : true,
      emeraldAshBorer        : true,
      nearbyTrees            : true,
      crownHealth            : true,
      diameterNumeric        : true
    }
  },
  'Hemlock'          : {
    image           : require('../img/hemlock.jpg'),
    latinName       : 'Tsuga sp.',
    images          : [
      require('../img/hemlock_id/3.jpg'),
      require('../img/hemlock_id/hemlock_cones.jpg'),
      require('../img/hemlock_id/hemlock_species.jpg'),
    ],
    captions        : ['Hemlock needles are flattened, 1.5-2cm long, dark green on top and lighter on the underside with two white lines running the length of the needles.', '', ''],
    maps            : [
      require('../img/maps/hemlock_tsugcana_range.png'),
      require('../img/maps/hemlock_tsugcaro_range.png')
    ],
    descriptionCards: [
      {
        title : 'Species',
        images: [],
        body  : [<Text style={styles.paragraph}>Eastern hemlock (<Text style={{fontStyle: 'italic'}}>Tsuga canadensis</Text>)</Text>,
          <Text style={styles.paragraph}>Carolina hemlock (<Text style={{fontStyle: 'italic'}}>Tsuga caroliniana</Text>)</Text>]
      },
      {
        title : 'Overview',
        images: [],
        body  : [<Text style={styles.paragraph}>American hemlock trees are being killed by hemlock woolly adelgids. Help fight these invasive insects by tagging health hemlock trees.</Text>]
      }, {
        title : 'Description',
        images: [],
        body  : [<Text style={styles.paragraph}>Hemlock is an evergreen conifer. Its needles are 1.5-2 cm long, dark green on top and lighter on the underside with two white lines running the length of the needle. Hemlocks produce small distinctive cones. These trees prefer shade and are often found along creeks and steams in mature forests</Text>,
          <Text style={styles.paragraph}>There are two different hemlock species native to North American, Eastern hemlock and Carolina hemlock. Eastern hemlock is larger and has a much broader distribution than Carolina hemlock, which is endemic to the southern Appalachians.</Text>]
      }, {
        title : 'Hemlock woolly adelgid',
        body  : [<Text style={styles.paragraph}>This insect sucks the sap of hemlock trees, weakening trees, preventing new growth, and eventually killing trees. In addition, hemlock woolly adelgids are thought to inject a toxin when feeding that further damages hemlock trees by drying them out. Infested trees loose needles and branches and typically die 4-10 years after initial adelgid arrival unless treated.</Text>,
          <Text style={styles.paragraph}>The hemlock woolly adelgid’s name comes from the insect’s egg sacs, which hang from the undersides of branches at certain times of year and look like small woolly tufts. These insects are invasive in North America, introduced from Japan.</Text>,
          <Text style={styles.paragraph}>Our hope is that this reporting app will let members of the public identify hemlock trees that have some natural resistance to hemlock woolly adelgid. We will then collect seeds from these trees and add them to tree breeding programs to try and propagate resistant trees to use in forest restoration.</Text>],
        images: [
          require('../img/DCP/HemWoolly/HWA photo 1.jpg'),
          require('../img/DCP/HemWoolly/HWA photo 2.jpg')
        ]
      }
    ],
    formProps       : {
      woollyAdesCoverage     : true,
      cones                  : true,
      crownClassification    : true,
      locationCharacteristics: true,
      nearbyTrees            : true,
      // partOfStudy            : true,
      // treated                : true,
      // accessibility          : true,
      crownHealth            : true,
      diameterNumeric        : true,
      //locationComment        : true
    }
  }
  ,
  'Other'            : {
    image           : require('../img/forest.jpg'),
    images          : [],
    maps            : [],
    descriptionCards: [
      {
        title : 'Other',
        body  : [<Text style={styles.paragraph}>Submissions for all other trees.</Text>],
        images: []
      }
    ],
    formProps       : {
      diameterNumeric: true,
      otherLabel     : true
    }
  }
  ,
  'White Oak'        : {
    image           : require('../img/white_oak.jpg'),
    images          : [
      require('../img/white_oak_id/1.jpg'),
      require('../img/white_oak_id/2.jpg'),
      require('../img/white_oak_id/3.jpg'),
      require('../img/white_oak_id/4.jpg'),
      // require('../img/white_oak_id/5.jpg'),
      require('../img/white_oak_id/6.jpg')
    ],
    captions        : ["White oaks take many years to reach sexual maturity, and large crops of acorns are not produced until trees are 50 years old.  Photo credit: Paul Wray, Iowa State University, Bugwood.org",
      "White oak bark on mature trees is light gray in color with rectangular furrows. Photo credit: Paul Wray, Iowa State University, Bugwood.org",
      "White oak leaves have rounded lobes and are 5-8.5 inches in length.  Photo credit: Chris Evans, University of Illinois, Bugwood.org",
      "When they first emerge, white oak leaves are covered with hairs and pinkish in color.  Photo credit: Paul Bolstad, University of Minnesota, Bugwood.org",
      "White oak typically grow 80-100 feet although much taller individuals have also been recorded.  Photo credit: David Stephens, Bugwood.org"
    ],
    latinName       : 'Quercus alba',
    maps            : [require('../img/maps/oak_queralba_range.png')],
    descriptionCards: [
      {
        title : 'Species',
        body  : [<Text style={[styles.paragraph, {fontStyle: 'italic'}]}>Quercus alba </Text>],
        images: []
      },
      {
        title : 'Overview',
        body  : [<Text style={styles.paragraph}>White oak is an extremely important tree species. It provides wood for lumber, (including bourbon barrels) and is also a key food source for wildlife. Help us breed better white oak by tagging big, healthy trees.</Text>],
        images: []
      },
      {
        title : 'Description',
        body  : [<Text style={styles.paragraph}>American white oak, <Text style={{fontStyle: 'italic'}}>Quercus alba</Text>, is a central component of the central hardwood forests. Mature white oaks typically grow very large, 80-100 feet high, and have broad, full canopies. White oaks can live a very long time and some trees have been found that are over 400 years old.
        </Text>,
          <Text style={styles.paragraph}>The leaves of white oak have alternate branching and seven to nine rounded lobes. This is different from red oaks, which typically have pointed lobes with a small hair on each tip.</Text>,
          <Text style={styles.paragraph}>It is important to note that there are several species in the “white oak” group that share this leaf shape (including swamp white oak and bur oak) and that oaks frequently hybridize, sometimes making it challenging to know which oak species you are looking at.</Text>],
        images: []
      },
      {
        title : 'Range',
        images: [],
        body  : [<Text style={styles.paragraph}>White oak trees are present throughout Eastern and Midwestern North America. However, this range overlaps with many other oak species.</Text>]
      }
    ],
    formProps       : {
      acorns           : true,
      heightFirstBranch: true,
      crownHealth      : true,
      diameterNumeric  : true,
      oakHealthProblems: true
    }
  },

  'American Elm': {
    image           : require('../img/elm.jpg'),
    latinName       : 'Ulmus americana',
    maps            : [require('../img/maps/elm_map.png')],
    images          : [
      require('../img/elm_id/Elm_bark.jpg'),
      require('../img/elm_id/Elm_leaf.jpg'),
      require('../img/elm_id/Elm_seeds.jpg'),
      require('../img/elm_id/Elm_flowers.jpg'),
      require('../img/elm_id/Elm_vase_shape.jpg'),
      require('../img/elm_id/Dutch_elm_diseases.jpg'),

    ],
    captions        : [
      "The bark on large elm trees is rough with flattened ridges and crisscrossing furrows. Photo credit: Kathy Smith, Ohio State University Extension, Bugwood.org",
      "Elm leaves are alternating, have asymmetrical bases, and have doublely serrated margins. Photo credit: Paul Wray, Iowa State University, Bugwood.org",

      "Elms produce seeds that are small, oval, papery samaras. Paul Wray, Iowa State University, Bugwood.org",
      "Elms are one of first to bloom in spring.  These flowers are not very showy (they have no petals) but are on long pedicels. Rob Routledge, Sault College, Bugwood.org",
      "Large elm trees tend to have a vase shape.  Photo credit: Joseph OBrien, USDA Forest Service, Bugwood.org",
      "Symptoms of Dutch elm disease include wilted or yellowing leaves and brown streaking in sapwood. Photo credit: George Hudler, Cornell University, Bugwood.org."
    ],
    descriptionCards: [
      {
        title : 'Species',
        body  : [<Text style={styles.paragraph}>American elm: <Text style={{fontStyle: 'italic'}}>Ulmus americana</Text></Text>],
        images: []
      }, {
        title : 'Introduction',
        body  : [<Text style={styles.paragraph}>American elm is a native species to North America that was once the dominant tree species along city and suburban streets. The American elm were known for their beautiful canopies and tolerance to poor soil conditions. After the introduction of Dutch elm disease in the 1930's, American elms have disappeared from the American cityscape.</Text>],
        images: []
      }, {
        title : 'Photo credits',
        body  : [<Text style={styles.paragraph}>Photo credits: Matt Levin, Wikimedia commons, CCBY-SA 2.0 License. Distribution maps courtesy of USGS.</Text>
        ],
        images: []
      }
    ],
    formProps       : {
      seedsBinary            : true,
      flowersBinary          : true,
      nearbyTrees            : true,
      // treated                : true,
      locationCharacteristics: true,
      crownHealth            : true,
      diameterNumeric        : true
    }
  }
}

export default Plants