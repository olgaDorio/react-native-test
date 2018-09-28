import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Emoji from 'react-native-emoji';


export default class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, description } = this.props;
    const placeholder = <Emoji name='thinking_face' style={{fontSize: 40}} />

    return (
      <View {...this.props}>
        <Text style={styles.value}>
          { value ? value : placeholder }
        </Text>
        <Text>{ description }</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  value: {
    fontSize: 40,
    marginRight: 5,
    marginBottom: -8,
  },
});
