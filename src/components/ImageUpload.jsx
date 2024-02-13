/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import uploadImage from '../assets/upload.png';

function ImageUpload({ onChange, onChangeEdit, value }) {
    // const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef();
    const [previewImage, setPreviewImage] = useState(null);
    const [existImg, setExistImg] = useState(value);

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                !existImg && setPreviewImage(() => reader.result); // Set preview image URL
                existImg && setExistImg(() => reader.result);
            };
            // setImageFile(selectedFile); // Set image file for further processing
        }
    };

    useEffect(() => {
        previewImage && onChange("image", previewImage);
        existImg && onChangeEdit("image", existImg);
    }, [previewImage, existImg, onChange, onChangeEdit])

    const handleClickUpload = () => {
        fileInputRef.current.click();
    }
    // const handleImageUpload = async () => {
    //     // Send imageFile to server using a form or fetch API
    //     try {
    //         const response = await fetch('/api/upload', {
    //             method: 'POST',
    //             body: imageFile, // Include imageFile in request body
    //         });
    //         if (response.ok) {
    //             console.log('Image uploaded successfully!');
    //             // Handle successful upload (e.g., display a success message)
    //         } else {
    //             console.error('Image upload failed:', response.statusText);
    //             // Handle upload errors
    //         }
    //     } catch (error) {
    //         console.error('Image upload error:', error);
    //         // Handle network or other errors
    //     }
    // };

    return (
        <div onClick={handleClickUpload} className='mx-auto'>
            {
                previewImage ?? existImg ?
                    <img className='w-40 h-40' src={previewImage ?? existImg} alt="Preview" /> :
                    <img className='w-40 h-40' src={uploadImage} alt="upload" />
            }
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className=' hidden'
            />
            {/* <button onClick={handleImageUpload}>Upload Image</button> */}
        </div>
    );
}

export default ImageUpload;