import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  
  return (
    <View style={{
      padding: 20,
    }}>
      <Link 
      style={{ color: 'blue' }}
      href="/state">
        <Text>UseState</Text>
      </Link>
      <Link 
      style={{ color: 'red' }}
      href="/effect">
        <Text>UseEffect</Text>
      </Link>
    </View>
  );
}
