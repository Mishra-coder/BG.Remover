import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
    const handleGetStarted = () => {
        const event = new CustomEvent('triggerUpload');
        window.dispatchEvent(event);
    };

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>Ready to Remove Backgrounds?</h2>
                    <p>Join thousands of users who trust BG.Remover for their image editing needs</p>
                    <div className="cta-buttons">
                        <button onClick={handleGetStarted} className="btn btn-primary btn-lg">
                            Get Started Free <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="cta-stats">
                        <div className="stat-item">
                            <div className="stat-number">1M+</div>
                            <div className="stat-label">Images Processed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">Happy Users</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Free Forever</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
