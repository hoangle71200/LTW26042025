import React, { useState } from 'react';
import axios from 'axios'

const ImageUploader = ({title, nameTitle, register}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [imageLink, setImageLink] = useState('');
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageLink("src/image/" + file.name);
    }
  };
  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', selectedImage)

    try {
      const response = await axios.post('http://localhost:7843/apitoimage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      // const data = await response.data()
      // console.log(data)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  return (
    <div>
      <h5>{title}</h5>
      <input {...register(nameTitle)} type='file' accept='image/*' onChange={handleImageChange} />
      <img src={imageLink}  style={{ width: "100px", height: "auto" }} hidden={(imageLink == '' ? true : false)} />
      <button onClick={handleUpload}>Tải ảnh lên</button>
    </div>
  )
};

export default ImageUploader;