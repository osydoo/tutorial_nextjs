import styles from "./alert.module.css";
import cn from "classnames";

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: tyle === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
