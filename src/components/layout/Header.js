import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>The kingdom of Illyria</h1>
        </header>
    )
}

const headerStyle = {
    background: '#9B1C31',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;