import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
   const [clicked, setClicked] = useState(false);
   const [searchPhrase, setSearchPhrase] = useState("");

   return (
      <View style={styles.headerContainer}>
         <View style={styles.searchBarContainer}>
            <View style={clicked ? styles.searchBarClicked : styles.searchBarUnclicked}>
               <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
               <TextInput
                  style={styles.input}
                  placeholder="Search"
                  value={searchPhrase}
                  onChangeText={setSearchPhrase}
                  onFocus={() => {
                     setClicked(true);
                  }}
               />
               {clicked && (
                  <Entypo
                     name="cross"
                     size={20}
                     color="black"
                     style={{ padding: 1 }}
                     onPress={() => {
                        setSearchPhrase("");
                        setClicked(false);
                     }}
                  />
               )}
            </View>

            {clicked && (
               <View style={styles.cancelButtonContainer}>
                  <Button
                     title="Cancel"
                     onPress={() => {
                        setSearchPhrase("");
                        setClicked(false);
                     }}
                  />
               </View>
            )}
         </View>

      </View>
   );
};

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
   },
   searchBarContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
   },
   searchBarUnclicked: {
      padding: 10,
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
   },
   searchBarClicked: {
      padding: 10,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-between",
   },
   input: {
      fontSize: 20,
      marginLeft: 10,
      border: "white",
      width: "70%",
   },
   cancelButtonContainer: {
      width: "25%",
      height: "10%",
   },
});

export default SearchBar;

