import { useState, useEffect } from 'react';
import Circle from "./circle";

const App = () => {

    return (
        <div className="app-flex">
            {/* <Circle /> */}
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);