import React from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} from "@expo/vector-icons";

const Icon = ({ name, type, size = 24, color = 'black', style, ...otherProps }) => {
  switch (type) {
    case "antdesign":
      return <AntDesign name={name} size={size} color={color} style={style} {...otherProps} />;
    case "entypo":
      return <Entypo name={name} size={size} color={color} style={style} {...otherProps} />;
    case "evilicons":
      return <EvilIcons name={name} size={size} color={color} style={style} {...otherProps} />;
    case "feather":
      return <Feather name={name} size={size} color={color} style={style} {...otherProps} />;
    case "fontawesome":
      return <FontAwesome name={name} size={size} color={color} style={style} {...otherProps} />;
    case "fontawesome5":
      return <FontAwesome5 name={name} size={size} color={color} style={style} {...otherProps} />;
    case "fontisto":
      return <Fontisto name={name} size={size} color={color} style={style} {...otherProps} />;
    case "foundation":
      return <Foundation name={name} size={size} color={color} style={style} {...otherProps} />;
    case "ionicons":
      return <Ionicons name={name} size={size} color={color} style={style} {...otherProps} />;
    case "materialcommunityicons":
      return <MaterialCommunityIcons name={name} size={size} color={color} style={style} {...otherProps} />;
    case "materialicons":
      return <MaterialIcons name={name} size={size} color={color} style={style} {...otherProps} />;
    case "octicons":
      return <Octicons name={name} size={size} color={color} style={style} {...otherProps} />;
    case "simplelineicons":
      return <SimpleLineIcons name={name} size={size} color={color} style={style} {...otherProps} />;
    case "zocial":
      return <Zocial name={name} size={size} color={color} style={style} {...otherProps} />;
    default:
      return null;
  }
};

export default Icon;

