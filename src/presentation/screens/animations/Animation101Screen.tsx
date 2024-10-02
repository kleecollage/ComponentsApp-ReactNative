import { Animated, Easing, StyleSheet } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

export const Animaton101Screen = () => {
  const { colors } = useContext(ThemeContext);
  const { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop} = useAnimation();

  return (
    <CustomView style={styles.container} >
      <Animated.View style={[
        styles.purpleBox,
        {
          backgroundColor: colors.primary
        },
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]} />

        <Button
          text='Fade In'
          onPress={ () => {
            fadeIn({});
            startMovingTopPosition({ 
              initialPosition: -100,
              easing: Easing.elastic(1), 
              duration: 750,
            })
          }} 
          styles = {{marginTop: 10}}
        />
        
        <Button
          text='Fade Out'
          onPress={ () => fadeOut({}) }
          styles = {{marginTop: 10}}
         />

    </CustomView>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center', 
  },
  purpleBox: {
    width: 150,
    height: 150,
  }
})