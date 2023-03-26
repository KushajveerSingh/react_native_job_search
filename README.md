# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)


# react_native_job_search

Advantages of react native
- Cross platform compatibility
- Native components (i.e. UI components are compiled to native android and ios code)
- Hot reloading. See the changes in real time
- Strong community support
- Easy to learn (because of JS and React)

Expo
- create-react-app and vite like app for react-native
- With expo you don't have to worry about configuring your native environment and dev dependencies.
- Expo also provide prebuilt components and APIs for Navigation, Gestures, Camera, Maps, and more
- Expo Router - uses file based routing system (similar to nextjs)

react-native vs reactjs
- In React, you use JS to render HTML elements, but in React native you use JS to render native mobile components
- like `<Text>` is used instead of `<p>`, `<View>` is used instead of `<div>` and `<View>` uses flexbox by default.
- `<TouchableOpacity>` is similar to button
- `<ActivityIndicator>` to show a spinner for loading
- `<Flatlist>` - for rendering a long list of items that need to be scrolled efficiently (like map in react). For large lists use Flatlist, and for small lists use map.
- `<ScrollView>` - can hold multiple components and views, providing a scrolling container for them (like overflowl: scroll).
- `<SafeAreaView>` - Provides a safe zone to render your app's content without being covered by the device's hardware features like the notch, home indicator, or status bar.
