import React, { useState } from 'react';
import axios from 'axios'
import { Field } from 'formik'

const ImageUploaderUpdate = ({title, nameTitle}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
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
      const data = await response.data()
      console.log(data)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  return (
    <div>
      <h5>{title}</h5>
      <Field name={nameTitle} type='file' accept='image/*' onChange={handleImageChange} />
      <button onClick={handleUpload}>Tải ảnh lên</button>
    </div>
  )
};

export default ImageUploaderUpdate;