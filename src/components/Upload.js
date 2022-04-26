// // import React from "react";
// // import ImageUploader from "react-images-upload";
// // class Upload extends React.Component {

// //   constructor(props) {
// //       super(props);
// //       this.state = { pictures: [] };
// //       this.onDrop = this.onDrop.bind(this);
// //   }

// //   onDrop(pictureFiles, pictureDataURLs) {
// //       this.setState({
// //           pictures: pictureFiles
// //       });
// //   }

// //   render() {
// //       return (
// //           <ImageUploader
// //               withIcon={true}
// //               buttonText='Choose images'
// //               onChange={this.onDrop}
// //               imgExtension={['.jpg', '.gif', '.png', '.gif']}
// //               maxFileSize={5242880}
// //           />
// //       );
// //   }
// // }

// // export default Upload

// import React from 'react';
// import Axios from 'axios';
// import { Input, Button, Center,Box,Heading } from '@chakra-ui/react';

// const img=[""]
// const Upload = () => {
//   let formData = new FormData();
//   const onFileChange = e => {
//     console.log(e.target.files[0]);
//     if (e.target && e.target.files[0]) {
//       formData.append(e.target.files[0]);
//     }
//   };
//   const SubmitFileData = () => {
//     Axios.post('https://v2.convertapi.com/upload', { formData })
//       .then(res => {
//         console.log(res);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   return (
//     <Box>
//        <Heading as="h4">Upload Images</Heading><br/>
//       <Center>
//         <Input name="file_upload" type="file" onChange={onFileChange} />
//       </Center>

//       <br />

//       <br />
//       <Center>
//         <Button onClick={SubmitFileData}>Submit</Button>
//         <br />
//       </Center>
//     </Box>
//   );
// };

// export default Upload;

import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React,{useState} from 'react'
import 'antd/dist/antd.min.css';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const UploadF = ({fileList, setFileList}) => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewVisible(true);
      setPreviewImage(file.url || file.preview);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
      <Upload
       listType="picture-card"
       fileList={fileList}
        beforeUpload={() => false}
        onChange={e => setFileList(e.fileList)}
        onPreview={handlePreview}
      >
                {uploadButton}
      </Upload>
      <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={() => setPreviewVisible(false)}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
      
    );
}

export default UploadF;