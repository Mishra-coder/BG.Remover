import { Zap, Shield, Sparkles, Download, Image as ImageIcon, Layers } from 'lucide-react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Zap size={32} />,
            title: 'Lightning Fast',
            description: 'Process images in seconds with our advanced AI technology running locally in your browser.'
        },
        {
            icon: <Shield size={32} />,
            title: '100% Private',
            description: 'Your images never leave your device. Everything is processed locally for maximum privacy.'
        },
        {
            icon: <Sparkles size={32} />,
            title: 'High Quality',
            description: 'Get professional-grade results with precise edge detection and smooth cutouts.'
        },
        {
            icon: <Download size={32} />,
            title: 'Free Forever',
            description: 'No subscriptions, no hidden fees. Remove backgrounds from unlimited images for free.'
        },
        {
            icon: <ImageIcon size={32} />,
            title: 'Any Image Type',
            description: 'Works with portraits, products, animals, graphics, and more. Supports JPG, PNG, WebP.'
        },
        {
            icon: <Layers size={32} />,
            title: 'Transparent Output',
            description: 'Download images with transparent backgrounds in PNG format, ready to use anywhere.'
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose BG.Remover?</h2>
                    <p>The most powerful and easy-to-use background removal tool</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
