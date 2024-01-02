import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Storedpassword() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("@savedPasswords")
      .then((items) => {
        return setItems(JSON.parse(items));
      })
      .catch((e) => console.log(e));
  }, [items]);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        {items != null ? (
          items.map((item) => {
            return (
              <View
                key={item.id}
                onStartShouldSetResponder={() => true}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 4,
                  marginVertical: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text>Title: {item.title}</Text>
                <Text style={{ color: "red", fontSize: 20 }}>{item.data}</Text>
              </View>
            );
          })
        ) : (
          <Text>HELLO</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}
