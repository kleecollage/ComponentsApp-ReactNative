import prompt from "react-native-prompt-android";

interface Options {
  title: string;
  description?: string;
  buttons: PromptButton[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: "cancel" | "default" | "destructive" ;
};

export const showPrompt = ({
  title,
  description,
  buttons,
  promptType = 'plain-text',
  placeholder,
  defaultValue
}: Options ) => {
  prompt(
    title,
    description,
    buttons,
    {
        type: promptType,
        cancelable: false,
        defaultValue: defaultValue,
        placeholder: placeholder
    }
);
}