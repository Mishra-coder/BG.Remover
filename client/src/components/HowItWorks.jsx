import { CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Upload Your Image',
            description: 'Drag and drop or click to upload any image from your device. Supports JPG, PNG, and WebP formats.'
        },
        {
            number: '2',
            title: 'AI Processing',
            description: 'Our advanced AI automatically detects and removes the background in seconds, all locally in your browser.'
        },
        {
            number: '3',
            title: 'Download Result',
            description: 'Preview the result with our interactive slider, then download your image with a transparent background.'
        }
    ];

    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2>How It Works</h2>
                    <p>Remove backgrounds in just 3 simple steps</p>
                </div>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-arrow">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
