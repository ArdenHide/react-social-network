import React from 'react';
import Classes from './Footer.module.css'

function Footer() {
    return (
        <footer className={Classes.footer}>
            <span className={`${Classes.danger_text} ${Classes.muted_text}`}>&copy; React Project. Danger Text</span>
        </footer>
    );
}

export default Footer;