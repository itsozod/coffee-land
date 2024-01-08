import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import styles from "./ChatBot.module.css";
export const ChatBot = () => {
  const [darkMode] = useDarkMode();
  return (
    <div
      className={styles.chatbot_container}
      style={{
        backgroundColor: darkMode ? "#1a193a" : "bisque",
        transition: ".3s ease",
      }}
    >
      <iframe
        title="Chatbot"
        src="https://www.chatbase.co/chatbot-iframe/AXNJQSFMyZONPiljfVNoi"
        width="400px"
        style={{ height: "100%", minHeight: "600px", border: "0" }}
      ></iframe>
    </div>
  );
};
