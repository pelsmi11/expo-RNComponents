import { Alert, Button, Platform, Text, View } from "react-native";
import prompt from "react-native-prompt-android";
import { HeaderTitle } from "../components";
import { styles } from "../theme/appTheme";
import Dialog from "react-native-dialog"; //expo
import { useState } from "react";

export const AlertScreen = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setDialogVisible(false);
  };
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
    // Alert.prompt(
    //   "¿Está seguro?",
    //   "Esta acción no se puede revertir",
    //   (valor: string) => console.log(`info: ${valor}`),
    //   "plain-text",
    //   "Hola mundo",
    //   "phone-pad"
    // );
    if (Platform.OS === "android") return;
    prompt(
      "Enter password",
      "Enter your password to claim your $1.5B in lottery winnings",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: (password) =>
            console.log("OK Pressed, password: " + password),
        },
      ],
      {
        type: "secure-text",
        cancelable: false,
        defaultValue: "test",
        placeholder: "placeholder",
      }
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Motrar Alerta" onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title="Motrar Prompt" onPress={showPrompt} />
      <View style={{ height: 10 }} />
      <Button title="Motrar Dialog" onPress={showDialog} />
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Input />
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </View>
  );
};
