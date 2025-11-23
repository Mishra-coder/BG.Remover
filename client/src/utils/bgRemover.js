export const removeBg = async (imageFile) => {
    try {
        const imgly = await import("@imgly/background-removal");
        const removeBackground = imgly.default || imgly.removeBackground;

        if (typeof removeBackground !== 'function') {
            throw new Error(`Library loaded but function not found. Exports: ${Object.keys(imgly).join(', ')}`);
        }

        const blob = await removeBackground(imageFile);
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Background removal failed:", error);
        throw error;
    }
};
