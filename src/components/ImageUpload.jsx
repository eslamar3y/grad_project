/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import uploadImage from '../assets/upload.png';


function ImageUpload({ defaultImage, getImageFile }) {
    const fileInputRef = useRef();
    const [previewImage, setPreviewImage] = useState(null);
    const [existImg, setExistImg] = useState(defaultImage);

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                !existImg && setPreviewImage(() => reader.result); // Set preview image URL
                existImg && setExistImg(() => reader.result);
            };
            getImageFile(selectedFile)
            // setImageFile(selectedFile); // Set image file for further processing
        }
    };

    // useEffect(() => {
    //     previewImage && onChange("image", previewImage);
    //     existImg && onChangeEdit("image", existImg);
    // }, [previewImage, existImg, onChange, onChangeEdit])

    const handleClickUpload = () => {
        fileInputRef.current.click();
    }

    return (
        <div onClick={handleClickUpload} className='mx-auto'>
            {
                previewImage ?? existImg ?
                    <img className='w-40 h-40' src={previewImage ?? existImg} alt="Preview" /> :
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