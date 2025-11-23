import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { removeBg } from '../utils/bgRemover';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Loader2, Download } from 'lucide-react';
import './Result.css';

const Result = () => {
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    const [originalImage, setOriginalImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const processImage = async () => {
            const file = location.state?.file;
            if (!file) {
                navigate('/');
                return;
            }

            const originalUrl = URL.createObjectURL(file);
            setOriginalImage(originalUrl);

            const progressInterval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return 90;
                    }
                    return prev + 10;
                });
            }, 200);

            try {
                const processedUrl = await removeBg(file);
                setProgress(100);
                setTimeout(() => {
                    setProcessedImage(processedUrl);
                    clearInterval(progressInterval);
                }, 300);
            } catch (err) {
                clearInterval(progressInterval);
                setError(`Failed to process image: ${err.message}`);
                console.error(err);
            } finally {
                setTimeout(() => setLoading(false), 500);
            }
        };

        processImage();
    }, [location.state, navigate]);

    if (loading) {
        return (
            <div className="result-page loading">
                <Loader2 className="spinner" size={48} />
                <p>Processing your image...</p>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="progress-text">{progress}%</span>
                <span className="loading-sub">This runs locally in your browser for privacy.</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="result-page error">
                <p>{error}</p>
                <button onClick={() => navigate('/')} className="btn btn-outline">Go Back</button>
            </div>
        );
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = processedImage;
        link.download = 'removed-bg.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="result-page">
            <div className="container">
                <h3 className="result-heading">Your Result</h3>
                <BeforeAfterSlider beforeImage={originalImage} afterImage={processedImage} />
                <div className="result-actions">
                    <button onClick={handleDownload} className="btn btn-primary">
                        <Download size={20} /> Download Image
                    </button>
                    <button onClick={() => navigate('/')} className="btn btn-outline">Process Another</button>
                </div>
            </div>
        </div>
    );
};

export default Result;
