import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Maps from "../components/maps/maps";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <View style={styles.root}>
    <View style={styles.masterView}>
      <Maps />
    </View>
    <View style={styles.detailView}>
      <Background>
        <Logo />
        <Header>Let’s start</Header>
        <Paragraph>Get Electricity everywhere, Plan your trip safely</Paragraph>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          Logout
        </Button>
      </Background>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, flexDirection: "column" },
  masterView: { flex: 1, maxHeight: 600, borderWidth: 1, borderColor: "blue" },
  detailView: {
    paddingBottom: 10,
    flex: 0.8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "blue"
  }
});
export default memo(Dashboard);
