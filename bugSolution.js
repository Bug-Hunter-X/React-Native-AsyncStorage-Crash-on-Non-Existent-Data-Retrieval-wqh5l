```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null; // Handle null values
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
};

// Example usage:
const myData = await getData('myKey');

if (myData) {
  console.log(myData.someProperty); // Access properties only if data exists
} else {
  console.log('Data not found');
}
```