import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view"
import { TextInput } from "react-native-gesture-handler";

const PrimaryVerification  = ({ navigation }) => {
  return (
    <SafeAreaView 
    style={{
      backgroundColor: "white",
      height: "100%"
    }}>
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "100%"
      }}
    >
      <View
        style={{
          padding: 15,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="black"
            onPress={() => navigation.goBack("")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 3
            }}
          >
         Primary Verifcation
          </Text>
        </View>
        <View style={{
            justifyContent: "center",
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 10
        }}>
            <Text style={{
                color: "red",
                fontSize: 15}}>To ensure a secure account experience, please verify your personal information</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <TextInput
            placeholder="Please Enter your full name"
            style={{
              padding: 15,
              alignItems: "center",
              width: "98%",
              borderWidth: 1
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            placeholder="Please enter your valid ID Number"
            style={{
              padding: 15,
              alignItems: "center",
              width: "98%",
              borderWidth: 1,
            }}
          ></TextInput>
        </View> 
        <View>
        <Pressable style={{
            marginTop: 25,
            padding: 15,
            alignItems: "center",
            backgroundColor: "aqua",
            width: "98%",
        }}><Text>Submit</Text></Pressable>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default PrimaryVerification;
