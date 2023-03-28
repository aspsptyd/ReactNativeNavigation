# ReactNativeNavigation
Navigation Implementation in React Native move to another Screen in App, Preferensi Belajar React Native Navigation here : https://www.youtube.com/watch?v=sDJq57nEuBk&list=PLXwOLdizIwSQ0Bd4Jf8HhSbRqmXPE0uAH

## A. Create Project React Native

<img width="836" alt="Screen Shot 2023-03-28 at 15 25 25" src="https://user-images.githubusercontent.com/98740335/228175703-bf178233-78f0-4a95-88aa-2f3f1d40c100.png">

## B. Install Plugin for React Native Navigation

<img width="996" alt="Screen Shot 2023-03-28 at 15 28 34" src="https://user-images.githubusercontent.com/98740335/228176572-c732e68d-762e-44c7-a00d-aae62eebcbf3.png">

Pastekan App.js

```js
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

Ketika di running kemudian muncul seperti berikut

<img width="1680" alt="Screen Shot 2023-03-28 at 15 34 59" src="https://user-images.githubusercontent.com/98740335/228179026-f45fbd29-3b92-437b-ac9c-ab5245e9052c.png">

Installkan kembali beberapa paket berikut

<img width="920" alt="Screen Shot 2023-03-28 at 15 37 28" src="https://user-images.githubusercontent.com/98740335/228179329-76d7803a-ba46-4eb4-a198-8c0e7280b3b4.png">

Stop, dan Running ulang dengan menjalankan `yarn start` kemudian `yarn android`, dan berikut hasil running kembalinya

<img width="1680" alt="Screen Shot 2023-03-28 at 15 37 41" src="https://user-images.githubusercontent.com/98740335/228179478-44318b37-61dd-44e4-b784-619d1957401c.png">
