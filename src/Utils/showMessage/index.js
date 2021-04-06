import { showMessage as showToast } from "react-native-flash-message";

export const showMessage = (message, type) => {
    showToast({
        message,
        type: type === 'success' ? 'success' : 'danger',
        backgroundColor: type === 'success' ? '#1abc9c' : '#d9435e'
      });
}