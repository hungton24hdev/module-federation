import React, { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.header}>
      Header ({React.version}){" "}
      <button onClick={() => setCount(count + 1)}>Increase: {count}</button>
    </div>
  );
};
export default Header;
