import React, { useState } from 'react';

import { Products, Navbar } from './components/index'

const App = () => {
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;