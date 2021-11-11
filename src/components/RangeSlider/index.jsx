import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


const CustomRangeSlider = () => {
    const [value, setValue] = useState([0, 1000])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valueLabelFormat(value) {
        return value.toFixed(2);
    }

    const styleObj = {

    }

    return (
        <div id="bt-price-range" className="for_web">

            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                min={0}
                max={1000}
                sx={{
                    '& .css-1kz0hui-MuiSlider-valueLabel': {
                        background: "#fff",
                        border: "1px solid #D9D9D9",
                        borderRadius: "3px",
                        color: "#000",
                        height: "27px",
                        fontSize: "0.8rem",
                        padding: "5px"

                    },

                    '& .css-eg0mwd-MuiSlider-thumb:hover': {
                        boxShadow: "none"
                    },
                    '& .css-1kz0hui-MuiSlider-valueLabel::before': {
                        display: "none"

                    },

                    '& .MuiSlider-rail': {
                        border: "1px solid #D3D3D3",
                        background: "#FAFAFA",
                        boxShadow: "inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb",
                        opacity: 1
                    },
                    '& .MuiSlider-thumb': {
                        background: "#fff",
                        border: '1px solid #63738e',
                        boxShadow: "inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;"

                    },

                    height: "8px",
                    color: '#63738e',
                }}
            />
        </div>
    );
}

export default CustomRangeSlider;