import React from 'react';
import './Toolbar.css';

const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div><div className="toolbar_logo"><a href="/">'rick.png'</a></div></div>
            <div className="spacer" />
            <div className="toolbar_navigation_item"></div>
            <div><br /><br />
            <main style={{marginInlineStart:'0'}}>

                <ul>
                    <li><a href="/">Location</a></li>
                    <li><a href="/">Character</a></li>
                    <li><a href="/">Episode</a></li>

                </ul>
                </main>
            </div>
        </nav>
    </header>
);
export default toolbar;