/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { fetchPeopleFromAPI } from "./actions";

type Props = {};
class App extends Component<Props> {
  render() {
    const { people, isFetching } = this.props.people;
    console.log("People: ", this.props);
    console.log("error: ", this.props.people.error);

    return (
      <View style={styles.container}>
        <Text>Redux App</Text>
        <Button title="Fetch Api" onPress={this.props.getPeople} />
        {isFetching && <Text> Loading...</Text>}
        <FlatList
          data={people}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Text>Birth year: {item.birth_year}</Text>
            </View>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5FCFF"
  }
});
const mapStateToProps = state => {
  return {
    people: state.people
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
