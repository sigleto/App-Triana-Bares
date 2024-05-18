import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
  PinchGestureHandler,
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';

const ZoomableImage = ({ source }) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      
    },
  });

  const panHandler = useAnimatedGestureHandler({
    onActive: (event, ctx) => {
      if (event.numberOfPointers === 1) {
        translateX.value = ctx.offsetX + event.translationX;
        translateY.value = ctx.offsetY + event.translationY;
      }
    },
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
  });
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={panHandler}>
        <Animated.View style={styles.container}>
          <PinchGestureHandler onGestureEvent={pinchHandler}>
            <Animated.View style={styles.container}>
              <Animated.Image
                source={source}
                style={[styles.image, animatedStyle]}
                resizeMode="contain"
              />
            </Animated.View>
          </PinchGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ZoomableImage;
