import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const MioptionsVertical = () => {
  return (
    <View style={styles.mioptionsVertical}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "66.67%",
    width: "16.67%",
    top: "16.67%",
    right: "41.67%",
    bottom: "16.67%",
    left: "41.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mioptionsVertical: {
    width: 24,
    height: 24,
  },
});

export default MioptionsVertical;
