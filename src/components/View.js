import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import 'reactjs-popup/dist/index.css';
import Collections from '../collection.json';
import Images from '../img.json';
import { useDispatch, useSelector } from 'react-redux';
import { Upload, Modal } from 'antd';

import {
  Container,
  Box,
  Heading,
  Center,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiFolder } from 'react-icons/bi';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const View = () => {
  const collectionDetails = useSelector(state => state.collectionDetails);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };
  function disp(item) {
    const { fileList } = item;

    return fileList.map((file, index) => {
      return (
        <div class="card" key={index} onPreview={handlePreview}>
          <img src={file.thumbUrl} alt={file.name} />
        </div>
      );
    });
  }
  return (
    <div>
      <Container maxW="md" align="center" style={{ marginTop: '5%' }}>
        <Box h="100px" as={Heading}>
          All Collections
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing="100px">
          {collectionDetails.map((item, i) => (
            <Center key={i}>
              <Popup
                style={{ overflow: 'hidden' }}
                trigger={
                  <Button
                    style={{
                      minWidth: '150%',
                      minHeight: '250%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box>
                      {' '}
                      <BiFolder
                        size={50}
                        style={{ align: 'center' }}
                        // overflow="hidden"
                      />
                    </Box>

                    <Box>{item.name}</Box>
                  </Button>
                }
                modal
                nested
              >
                <Box className="modal">
                  <Heading as="h4">{item.name}</Heading>
                  <br />
                  <p>
                    <i>{item.desc}</i>
                  </p>
                  <br />
                  {/* <SimpleGrid column={3}>{disp(item)}</SimpleGrid> */}
                  <SimpleGrid columns={3} spacingX="40px" spacingY="20px" >
                    {disp(item)}
                  </SimpleGrid>
                  <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={() => setPreviewVisible(false)}
                >
                  <img
                    alt="example"
                    style={{ width: '100%' }}
                    src={previewImage}
                  />
                </Modal>
                </Box>
              </Popup>
            </Center>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default View;
