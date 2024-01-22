import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { UserContext } from "../Authcontext";
//import Clipboard from "@react-native-community/clipboard";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";
import { FontAwesome } from "@expo/vector-icons";

export default function Storedpassword() {
  const [items, setItems] = useState([]);
  const { userData, isSaved } = useContext(UserContext);
  const [copiedText, setCopiedText] = useState("");
  const [isDeleted, setIsdeleted] = useState(false);

  const handleDelete = async (e) => {
    const deletepassword = {
      id: e.id,
      uid: userData._id,
    };

    console.log(e);
    try {
      const deletedData = await axios.post(
        "http://192.168.0.112:2000/api/deletepassword",
        deletepassword
      );
      if (deletedData) {
        console.log(deletedData.data);
        setIsdeleted((oldval) => !oldval);
        showToast(e.password)
      } else {
        console.log(deletedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showToast = (e) => {
    Toast.show({
      type: "success",
      text1: e,
      text2: "deleted 👋",
    });
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };
  const copyToClipboard = async ({ item }) => {
    await Clipboard.setStringAsync("hgf");
    console.log(item);
  };

  const getData = async () => {
    try {
      const userPWD = await axios.post(
        "http://192.168.0.112:2000/api/passwords",
        { id: userData._id }
      );
      if (userPWD) {
        console.log(userPWD.data, "jiluhgc");
        setItems(userPWD.data);
      } else {
        console.log("it did not work");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //AsyncStorage.getItem("@savedPasswords")
    // .then((items) => {
    //    return setItems(JSON.parse(items));
    // })
    //   .catch((e) => console.log(e));
    getData();
  }, [isSaved, isDeleted]);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <View>
          <Text>Where are the data</Text>
        </View>
        {items ? (
          items.map((item, index) => {
            console.log(item, "popohgvhjkjhg");
            return (
              <View
                key={item._id}
                onStartShouldSetResponder={() => true}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 10,
                  marginHorizontal: 10,
                  backgroundColor: "grey",
                }}
              >
                <Text>Platform: {`${item.platform} ${index + 1}`}</Text>
                <Text
                  style={{
                    color: "red",
                    fontSize: 20,
                    backgroundColor: "yellow",
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderRadius: 20,
                  }}
                  selectable
                >
                  {item.password}
                </Text>
                <View style={{ flexDirection: "row", gap: 20, marginTop: 9 }}>
                  <TouchableOpacity onPress={(e) => handleDelete(item)}>
                    <FontAwesome name="trash-o" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : (
          <Text>You'll find your saved passwords here</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}
