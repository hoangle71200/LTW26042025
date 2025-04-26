import React, { useEffect, useState } from 'react'
import axios from 'axios';

const VideoUploader = ({title, nameTitle, register}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [uploadStatus, setUploadStatus] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("go if")
      console.log(file)
      setSelectedVideo(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedVideo) {
      alert("Vui lòng chọn video để tải lên.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedVideo);

    try {
      const response = await axios.post('http://localhost:7843/apitovideo/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // setUploadStatus(response.data);
      setVideoLink(`src/image/video/${selectedVideo.name}`);
    } catch (error) {
      console.error('Error uploading video:', error);
      // setUploadStatus('Lỗi khi tải video lên.');
    }
  };

  return (
    <div>
      <h5>{title}</h5>
      <input {...register(nameTitle)} type='file' accept='video/*' onChange={handleVideoChange} />
      <button type="button" onClick={handleUpload}>Tải video lên</button>
      <video key={videoLink} style={{ width: '400px', height: 'auto' }} hidden={videoLink == '' ? true : false} controls>
        <source src={videoLink} type='video/mp4' />
      </video>
      {/*{uploadStatus && <p>{uploadStatus}</p>}*/}
    </div>
  )
};

export default VideoUploader;
