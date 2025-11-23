import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import './UploadBox.css';

const UploadBox = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleTriggerUpload = () => {
            if (fileInputRef.current) {
                fileInputRef.current.click();
            }
        };

        window.addEventListener('triggerUpload', handleTriggerUpload);
        return () => {
            window.removeEventListener('triggerUpload', handleTriggerUpload);
        };
    }, []);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFileSelect = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        if (file.type.startsWith('image/')) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file.');
        }
    };

    const handleRemovePreview = (e) => {
        e.stopPropagation();
        setPreview(null);
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleProcess = (e) => {
        e.stopPropagation();
        if (selectedFile) {
            navigate('/result', { state: { file: selectedFile } });
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    return (
        <div
            className={`upload-box ${isDragging ? 'dragging' : ''} ${preview ? 'has-preview' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !preview && fileInputRef.current.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                hidden
            />

            {!preview ? (
                <div className="upload-content">
                    <div className="upload-icon-wrapper">
                        <UploadCloud size={40} />
                    </div>
                    <h3>Upload your image</h3>
                    <p>or drop a file here</p>
                    <span className="upload-hint">Supports: JPG, PNG, WebP</span>
                </div>
            ) : (
                <div className="preview-content">
                    <button className="remove-preview" onClick={handleRemovePreview}>
                        <X size={20} />
                    </button>
                    <div className="preview-image-wrapper">
                        <img src={preview} alt="Preview" className="preview-image" />
                    </div>
                    <div className="preview-info">
                        <div className="file-info">
                            <ImageIcon size={18} />
                            <span className="file-name">{selectedFile.name}</span>
                        </div>
                        <span className="file-size">{formatFileSize(selectedFile.size)}</span>
                    </div>
                    <button className="btn btn-primary process-btn" onClick={handleProcess}>
                        Remove Background
                    </button>
                </div>
            )}
        </div>
    );
};

export default UploadBox;
