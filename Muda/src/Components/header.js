// Import libraries to make the Component
import React from 'react';
import { Text , View} from 'react-native'


// Make hrte Component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>Muda</Text>
    </View>
  );
}


const styles = {
  viewStyle: {
    backgroundColor: '#F9F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 18,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
}

// Make Component available to other areas of the App
export default Header;
