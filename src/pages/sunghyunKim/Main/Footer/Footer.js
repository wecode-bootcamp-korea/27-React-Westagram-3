import React from 'react';
import { INFO_LIST } from '../../../../data/footData';
import './Footer.scss';
function Footer() {
  return (
    <footer className="footer">
      <ul>
        {INFO_LIST.map(info => {
          const { id, content } = info;
          return (
            <li key={id}>
              <a href="#">{content}</a>
            </li>
          );
        })}
      </ul>
      <span className="copyright"> © 2019 INSTAGRAM </span>
    </footer>
  );
}

export default Footer;
