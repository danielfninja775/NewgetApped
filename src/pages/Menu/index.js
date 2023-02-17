import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,


} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontFamily,Colors } from '../../assets/Util/CommonStyle';
import { useNavigation } from '@react-navigation/native';


const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default function SideScroll () {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>


    
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>


        <SectionList

          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
       
      </SafeAreaView>
 
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Specials',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Monday Special',
        uri: 'https://i.pinimg.com/564x/c7/8a/dd/c78add5b51ba4af3bd5042edaaa984a0.jpg',
      },
      {
        key: '2',
        text: 'Tuesday Special',
        uri: 'https://i.pinimg.com/564x/f1/80/17/f18017900711d078c87bcafc18a5bd4b.jpg',
      },

      {
        key: '3',
        text: 'Wednesday Special',
        uri: 'https://i.pinimg.com/564x/3f/c8/78/3fc878f9168d64f6ad1e51c2933723a9.jpg',
      },
      {
        key: '4',
        text: 'Thursday Special',
        uri: 'https://i.pinimg.com/564x/ac/28/fe/ac28fecfb147771b6d47221aa605ef65.jpg',
      },
      {
        key: '5',
        text: 'Friday Special',
        uri: 'https://i.pinimg.com/564x/43/e6/6a/43e66a0e18d20d3dc5b8b0386af67e40.jpg',
      },
    ],
  },

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 19,
    color: 'red',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius:5
  },
  itemText: {
    color: 'black',
    marginTop: 5,
    fontFamily: FontFamily.ind
  },
});