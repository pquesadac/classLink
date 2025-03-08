import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any>;
}

function Login({ navigation }: LoginProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 219.52 239.47" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(97,139,74,1)"
            cx={110}
            cy={120}
            rx={110}
            ry={120}
          />
        </Svg>
        <Svg viewBox="0 0 319.3 153.41" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(175,188,136,1)"
            cx={160}
            cy={77}
            rx={160}
            ry={77}
          />
        </Svg>
        <Svg viewBox="0 0 86.06 118.49" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,248,232,1)"
            cx={43}
            cy={59}
            rx={43}
            ry={59}
          />
        </Svg>
        <Text style={styles.inicioSesion}>Inicio Sesion</Text>
        <TextInput placeholder="Usuario" style={styles.placeholder} />
      </View>
      <View style={styles.ellipse4Stack}>
        <Svg viewBox="0 0 319.3 153.41" style={styles.ellipse4}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(175,188,136,1)"
            cx={160}
            cy={77}
            rx={160}
            ry={77}
          />
        </Svg>
        <Svg viewBox="0 0 219.52 239.47" style={styles.ellipse5}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(97,139,74,1)"
            cx={110}
            cy={120}
            rx={110}
            ry={120}
          />
        </Svg>
        <Svg viewBox="0 0 219.52 239.47" style={styles.ellipse6}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(97,139,74,1)"
            cx={110}
            cy={120}
            rx={110}
            ry={120}
          />
        </Svg>
        <Svg viewBox="0 0 86.06 118.49" style={styles.ellipse7}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,248,232,1)"
            cx={43}
            cy={59}
            rx={43}
            ry={59}
          />
        </Svg>
      </View>
      <TextInput
        placeholder="Contraseña"
        style={styles.placeholder2}
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,248,232,1)"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 346,
    height: 197,
    position: "absolute"
  },
  ellipse2: {
    top: 30,
    left: 235,
    width: 300,
    height: 213,
    position: "absolute",
    transform: [
      {
        rotate: "-47.00deg"
      }
    ]
  },
  ellipse3: {
    top: 161,
    width: 162,
    height: 254,
    position: "absolute",
    transform: [
      {
        rotate: "43.00deg"
      }
    ],
    left: 164
  },
  inicioSesion: {
    top: 350,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    left: 154
  },
  placeholder: {
    top: 399,
    left: 154,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 181,
    borderWidth: 1,
    borderColor: "#000000"
  },
  ellipseStack: {
    width: 535,
    height: 429,
    marginTop: -66,
    marginLeft: -73
  },
  ellipse4: {
    top: 103,
    left: 0,
    width: 326,
    height: 273,
    position: "absolute",
    transform: [
      {
        rotate: "-76.00deg"
      }
    ]
  },
  ellipse5: {
    top: 75,
    left: 179,
    width: 346,
    height: 239,
    position: "absolute",
    transform: [
      {
        rotate: "-36.00deg"
      }
    ]
  },
  ellipse6: {
    top: 49,
    left: 240,
    width: 346,
    height: 239,
    position: "absolute"
  },
  ellipse7: {
    top: 0,
    width: 129,
    height: 161,
    position: "absolute",
    transform: [
      {
        rotate: "43.00deg"
      }
    ],
    left: 341
  },
  ellipse4Stack: {
    width: 586,
    height: 376,
    marginTop: 115,
    marginLeft: -88
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 181,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: -471,
    marginLeft: 81
  }
});

export default Login;