import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Output from './components/Output.js'
import NumericInputWrapper from './components/NumericInputWrapper.js'
import colorScheme from './components/colors.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0, // TODO: do something with this value
      price: 0,
      liters: 0,
      kilometers: 0,
    };
  }

  render() {
    const { liters, kilometers, price, days } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topline}></View>

        <View style={styles.topbar}>
          <Text style={styles.title}>
            Gas Calculator
          </Text>
        </View>

        <View style={styles.content}>

          <View style={styles.table}>

            <NumericInputWrapper
              title="Liters"
              onChange={liters => this.setState({liters})}
              value={this.state.liters}
              style={styles.tableItem}
            />

            <NumericInputWrapper
              title="Kilometers"
              onChange={kilometers => this.setState({kilometers})}
              value={this.state.kilometers}
              style={styles.tableItem}
            />

            <NumericInputWrapper
              title="Price"
              onChange={price => this.setState({price})}
              value={this.state.price}
              style={styles.tableItem}
            />

            <NumericInputWrapper
              title="Days"
              onChange={days => this.setState({days})}
              value={this.state.days}
              style={styles.tableItem}
            />

          </View>

          <View style={styles.table}>
            <Output
              style={styles.tableItem}
              description="lit/100km"
              value={liters && kilometers ? Number(liters * 100 / kilometers).toFixed(2) : null}
            />

            <Output
              style={styles.tableItem}
              description="RUB"
              value={liters && price ? liters * price : null}
            />

            <Output
              style={styles.tableItem}
              description="RUB/km"
              value={price && liters && kilometers ? price * liters / kilometers : null}
            />

            <Output
              style={styles.tableItem}
              description="RUB/day"
              value={price && liters && days ? price * liters / days : null}
            />
          </View>
        </View>
      </View>
    );
  }
}

const fontFamily = 'Roboto';

const padding = 30;

const horizontalPadding = {
  paddingLeft: padding,
  paddingRight: padding,
};

const verticalPadding = {
  paddingTop: padding,
  paddingBottom: padding,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topline: {
    backgroundColor: colorScheme.dark,
    height: 24,
    alignSelf: 'stretch',
  },

  topbar: {
    ...horizontalPadding,
    backgroundColor: colorScheme.primary,
    height: 64,
    marginTop: 'auto',
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
  },

  title: {
    fontFamily,
    color: '#000000',
    fontSize: 24,
  },

  content: {
    ...horizontalPadding,
    ...verticalPadding,
    flex: 1,

    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },

  table: {
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tableItem: {
    width: '48%',
    margin: '1%',
    minHeight: 80,
    height: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
