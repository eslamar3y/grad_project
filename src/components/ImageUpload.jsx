/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import uploadImage from '../assets/upload.png';


function ImageUpload({ defaultImage, getImageFile }) {
    const fileInputRef = useRef();
    // const [image, setImage] = useState(defaultImage);
    const [preview, setPreview] = useState(defaultImage);

    // Handles image files selected by the user
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // setImage(() => file);
            setPreview(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        getImageFile(preview)
    }, [getImageFile, preview])

    const handleClickUpload = () => {
        fileInputRef.current.click();
    }

    return (
        <div onClick={handleClickUpload} className='mx-auto'>
            {
                preview ?
                    <img className='w-40 h-40' src={preview} alt="Preview" /> :
                    <img className='w-40 h-40' src={uploadImage} alt="upload" />
            }
            <input
                name="PhotoPath"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className=' hidden'
            />
        </div>
    );
}

export default ImageUpload;