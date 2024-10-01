import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter'

export const AlertScreen = () => {
  
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
      userInterfaceStyle: 'dark' 
    });
  
  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], {
      cancelable: true,
      onDismiss() {
        console.log('on dismiss')
      }
    });

    // La siguente alerta unicamente funciona en IOS
    const onShowPromt = () => {
      showPrompt({
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum',
        buttons: [
          {text: 'Ok', onPress: () => console.log('ok')}
        ],
        placeholder: 'Placeholder'
      })

      //! Codigo nativo
      // Alert.prompt(
      //   'Correo electronico',
      //   'Lorem Ipsum Dolor enim commodo ut amet',
      //   (valor: string) => console.log({valor}),
      //   'secure-text',
      //   'Soy el valor por defecto',
      //   'number-pad'
      // )
    }

  return (
    <CustomView style={ globalStyles.globalMargin}>
      <Title safe text='Alertas' />

      <Button
        text='Alerta 2 Botones'
        onPress={ createTwoButtonAlert }
      />
      <View style={{height: 10}} />

      <Button
        text='Alerta 3 Botones'
        onPress={ createThreeButtonAlert }
      />
      <View style={{height: 10}} />

      <Button
        text='Promt - Input'
        onPress={ onShowPromt }
      />
      <View style={{height: 10}} />

    </CustomView>
  )
}
