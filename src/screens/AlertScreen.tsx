import { Alert, Button, Text, View } from "react-native";
import { HeaderTitle } from "../components";
import { styles } from "../theme/appTheme";

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      "Título",
      "Este es el mensaje de la alerta",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("cancelable"),
      }
    );
  };

  const showPrompt = () => {
    Alert.prompt(
      "¿Está seguro?",
      "Esta acción no se puede revertir",
      (valor: string) => console.log(`info: ${valor}`),
      "plain-text",
      "Hola mundo",
      "phone-pad"
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Motrar Alerta" onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title="Motrar Prompt" onPress={showPrompt} />
    </View>
  );
};
