import { BinaryNativeClient } from 'binary-native-client';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    BinaryNativeClient.echo({ value: inputValue })
}
