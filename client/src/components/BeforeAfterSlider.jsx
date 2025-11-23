import { useState } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e) => {
        if (!isDragging) return;

        const container = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - container.left;
        const percentage = (x / container.width) * 100;

        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const container = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - container.left;
        const percentage = (x / container.width) * 100;

        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    return (
        <div
            className="before-after-slider"
            onMouseMove={handleMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
        >
            <div className="slider-container">
                <div className="image-wrapper">
                    <img src={afterImage} alt="After" className="after-image" />
                </div>
                <div
                    className="image-wrapper before-wrapper"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img src={beforeImage} alt="Before" className="before-image" />
                </div>

                <div
                    className="slider-line"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="slider-handle">
                        <div className="slider-arrow left">‹</div>
                        <div className="slider-arrow right">›</div>
                    </div>
                </div>

                <div className="labels">
                    <span className="label-before">Original</span>
                    <span className="label-after">Background Removed</span>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
