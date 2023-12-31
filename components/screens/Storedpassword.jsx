import { View, Text, ScrollView, AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";

export default function Storedpassword() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("savedPasswords");
        if (value !== null) {
          setItems(value);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{ height: 300 }}>
      {items ? (
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
        <View>
          <Text>No data</Text>
        </View>
      )}
    </ScrollView>
  );
}
