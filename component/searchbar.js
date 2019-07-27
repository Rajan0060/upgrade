import React from 'react';

const searchbar = props =>(

<form className="searchbar">
  <div slot="before-inner">Before Inner</div>
  <div className="searchbar-inner"></div>
    <div slot="inner-start">Inner Start</div>
    <div className="searchbar-input-wrap"></div>
      <div slot="input-wrap-start">Input Wrap Start</div>
      <input type="search" placeholder="Search"></input>
      <i className="searchbar-icon"></i>
      <span class="input-clear-button"></span>
      <div slot="input-wrap-end">Input Wrap End</div>
</form>
);
export default searchbar;