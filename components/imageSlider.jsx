import React, { useState, useEffect, useRef } from "react";
import { View, Image, ScrollView, StyleSheet, useWindowDimensions } from "react-native";

const ImageSlider = ({ sliderImages }) => {
  const windowWidth = useWindowDimensions().width;
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPage < sliderImages.length - 1) {
        scrollViewRef.current.scrollTo({
          x: windowWidth * (currentPage + 1),
          animated: true,
        });
        setCurrentPage(currentPage + 1);
      } else {
        scrollViewRef.current.scrollTo({
          x: 0,
          animated: true,
        });
        setCurrentPage(0);
      }
    }, 2000); // Change the autoplay interval as needed

    return () => clearInterval(interval);
  }, [currentPage, sliderImages.length, windowWidth]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          setCurrentPage(Math.floor(event.nativeEvent.contentOffset.x / windowWidth));
        }}
      >
        {sliderImages.map((image, index) => (
          <View key={index} style={[styles.slide, { width: windowWidth }]}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
    marginTop: -50
  },
});

export default ImageSlider;
