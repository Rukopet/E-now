import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>This is e-now App get charged everywhere</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import { Provider } from "react-native-paper";
import App from "./src";
import { theme } from "./src/core/theme";

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
