import { useState } from "react";

function ColorFlipper() {
    const [color, setColor] = useState("#fff");

    function handleColor(event) {
        const newColor = event.target.value;
        setColor(newColor);
        document.body.style.backgroundColor = newColor;
    }

    return (
        <>
            <h1>Color Flipper</h1>
            <h2></h2>
            <input type="color" value={color} onChange={handleColor} />
        </>
    );
}

export default ColorFlipper;
