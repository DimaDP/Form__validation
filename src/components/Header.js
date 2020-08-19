import React from 'react';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <img src="/img/CREDITON.PNG" alt="crediton" />
    <div className="language-toggler">
      <button
        type="button"
        className="language-toggler__link language-toggler__link--active"
      >
        РУ
      </button>
      <button type="button" className="language-toggler__link">УКР</button>
    </div>
  </header>
);
