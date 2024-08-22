import React from "react";
import css from './Header.module.css';

function Header() {
  return (
      <header className={css.header}>
      <h1 className={css.title}>ChatGPT Interface</h1>
    </header>
  );
}

export default Header;
