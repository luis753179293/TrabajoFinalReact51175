import styles from "./button.module.css";
import CardWidgetContainer from "../CardWidget/CardWidgetContainer";

const Button = (props) => {
  const styleButton = {
    backgroundColor: props.color,
  };

  return (
    <button
      
      onClick={props.onPress}
      disabled={props.disabled}
      className={styles.btn}
      style={styleButton}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
