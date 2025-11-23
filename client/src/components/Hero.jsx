import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import UploadBox from './UploadBox';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Remove Backgrounds <br />
                    <span className="highlight">In Seconds</span>
                </h1>
                <p className="hero-subtitle">
                    The most accurate and powerful AI background remover.
                    100% automatic and free.
                </p>

                <div className="hero-upload-area">
                    <UploadBox />
                </div>

                <div className="hero-features">
                    <div className="feature-item">
                        <span className="check-icon">✓</span> Free to use
                    </div>
                    <div className="feature-item">
                        <span className="check-icon">✓</span> High Quality
                    </div>
                    <div className="feature-item">
                        <span className="check-icon">✓</span> Instant Result
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
