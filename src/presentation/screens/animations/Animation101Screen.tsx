import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'
import { useAnimation } from '../../hooks/useAnimation'

export const Animaton101Screen = () => {

  const { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]} />

        <Pressable
          onPress={ () => {
            fadeIn({});
            startMovingTopPosition({ 
              initialPosition: -100,
              easing: Easing.elastic(1), 
              duration: 750,
            })
          }} 
          style = {{marginTop: 10}}
        >
          <Text>Fade In</Text>
        </Pressable>
        
        <Pressable onPress={ () => fadeOut({}) } style = {{marginTop: 10}}>
          <Text>Fade Out</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center', 
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
})