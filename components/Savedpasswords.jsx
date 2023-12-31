import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Savedpasswords({ data }) {
  return (
    <ScrollView  keyboardShouldPersistTaps='handled' style={{height: 300}}>
      {data.map((item) => {
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
      })}
    </ScrollView>
  );
}
