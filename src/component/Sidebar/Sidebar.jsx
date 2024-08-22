import React from "react";
import css from './Sidebar.module.css';

function Sidebar() {
  return (
      <aside className={css.sidebar}>
      <ul>
        <li> <a href="">Chat 1</a></li>
        <li> <a href="">Chat 2</a></li>
        <li><a href="">Chat 3</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
