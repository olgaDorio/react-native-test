import React from 'react';
import { Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import colorScheme from './colors.js';

export default class NumericInputWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View {...this.props}>
        <Text>{this.props.title}</Text>
        <NumericInput


          onChange={this.props.onChange}
          value={this.props.value}
          initValue={this.props.value}
          minValue={0}

          rounded
          type='up-down'
          textColor={ colorScheme.text }
          iconStyle={{ color: colorScheme.text }}
          upDownButtonsBackgroundColor={colorScheme.primary}
        />
      </View>
    )
  }
};
