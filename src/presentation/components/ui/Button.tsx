import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';
import { preset } from '../../../../jest.config';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ( { text, styles, onPress }: Props ) => {
  return (
    <Pressable
      onPress = { onPress }
      style = { ({ pressed }) => ([
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0 : 1,
          backgroundColor: colors.primary
        }
      ])}
    >
      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: colors.buttonTextColor
        }
      ]}>{text}</Text>
    </Pressable>
  )
}
