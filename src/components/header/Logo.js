import React from 'react';
import './header.css';

const Logo = () => {
    return (
        <div>
            <img src="https://www.eyerov.com/assets/images/logo.png" alt="Company logo" width="80px" />
            <LogoTitle />
        </div>
    );
};

const LogoTitle = () => {
    let title = "EyeROV Visualization and Analytics Platform";
    let formattedTitle = title.replace(
        /(\b[a-z])/ig, '<span class="fstLtr">$1</span>'
    );
    

    return <span className="d-none d-sm-inline headerTitle" dangerouslySetInnerHTML={{ __html: formattedTitle }}>
    </span>;
}

export default Logo;