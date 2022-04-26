import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import 'reactjs-popup/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions';
// import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import {
  Container,
  Box,
  Heading,
  Center,
  Button,
  SimpleGrid,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  useDisclosure,
  AlertDialogOverlay,
  IconButton,
  Flex,
  useEditableControls,
  ButtonGroup,
  Editable,
  EditablePreview,
  Input,
  EditableInput,
} from '@chakra-ui/react';
import 'antd/dist/antd.min.css';
import { Upload } from 'antd';

import { CloseIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import {
  AiFillDelete,
  AiFillFileAdd,
  AiOutlineClose,
  AiOutlineCheck,
} from 'react-icons/ai';
import { BiFolder, BiEditAlt } from 'react-icons/bi';

const View = () => {
  const collectionDetails = useSelector(state => state.collectionDetails);
  // const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [currentCollection, setCurrentCollection] = useState('');
  const [isEditing, setEditing] = useState(false);
  const [isUploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handlePreview = async file => {
    setPreviewVisible(true);
    setPreviewImage(file.thumbUrl);
    setPreviewTitle(file.name);
  };
  const handleDeleteImage = (index, i) => {
    dispatch({
      type: actionTypes.DELETE_IMAGE,
      editIndex: i,
      deleteIndex: index,
    });
    setEditing(false);
  };

  const handleAddImage = (file, i) => {
    setUploading(true);
    console.log(file[0]);
    // setFileList(file)
    dispatch({
      type: actionTypes.ADD_NEW_IMG,
      editIndex: i,
      newValue: file[0],
    });
    // setEditing(false);
  };
  const disp = (item, i) => {
    // setCurrentCollection(i);
    const { fileList } = item;

    return fileList.map((file, index) => {
      return (
        <>
          <div>
            {isEditing && (
              <>
                <Button
                  style={{ align: 'center', marginBottom: '5px' }}
                  onClick={() => {
                    handleDeleteImage(index, i);
                  }}
                >
                  <AiFillDelete />
                </Button>
                <br />
              </>
            )}
            <div key={index}>
              <img
                src={file.thumbUrl}
                alt={file.name}
                onClick={() => handlePreview(file)}
              />

              <br />
            </div>
          </div>
        </>
      );
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDescChange = (value, i) => {
    console.log(value, i);
    dispatch({
      type: actionTypes.EDIT_DESC,
      editIndex: i,
      newValue: value,
    });
  };
  const handleNameChange = (value, i) => {
    console.log(value, i);
    dispatch({
      type: actionTypes.EDIT_NAME,
      editIndex: i,
      newValue: value,
    });
  };
  const handleDelete = i => e => {
    setCurrentCollection(i);
    onOpen(e);
  };

  const onDelete = () => {
    // console.log(currentCollection)
    dispatch({
      type: actionTypes.DELETE_COLLECTION,
      deleteIndex: currentCollection,
    });
    window.location.reload();
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
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
                onClose={() => window.location.reload()}
                trigger={
                  <Button
                    style={{
                      minWidth: '110%',
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
                  <Box
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Editable
                      as="h4"
                      defaultValue={item.name}
                      fontSize="3xl"
                      isPreviewFocusable={false}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5px',
                        fontWeight: '700',
                      }}
                      onSubmit={value => handleNameChange(value, i)}
                    >
                      <EditablePreview />
                      &nbsp;
                      {/* Here is the custom input */}
                      <Input as={EditableInput} />
                      <EditableControls />
                    </Editable>
                    {/* <Heading as="h4">{item.name}</Heading> */}
                    <Box style={{ display: 'flex' }}>
                      {isEditing && (
                        <Upload
                          listType="picture"
                          beforeUpload={() => false}
                          onChange={e => handleAddImage(e.fileList, i)}
                        >
                          <Button
                            style={{ marginTop: '5px', marginRight: '5px' }}
                          >
                            <AiFillFileAdd />
                          </Button>
                        </Upload>
                      )}
                      <Button
                        style={{ marginTop: '5px', marginRight: '5px' }}
                        onClick={() => {
                          setEditing(!isEditing); setUploading(false);
                        }}
                      >
                        {isUploading ? (
                          <AiOutlineCheck />
                        ) : isEditing ? (
                          <AiOutlineClose></AiOutlineClose>
                        ) : (
                          <BiEditAlt></BiEditAlt>
                        )}
                      </Button>
                      <Button
                        onClick={handleDelete(i)}
                        style={{ marginRight: '15px', marginTop: '5px' }}
                      >
                        <AiFillDelete></AiFillDelete>
                      </Button>
                    </Box>
                  </Box>
                  <br />
                  <p>
                    <Editable
                      as="h4"
                      defaultValue={item.desc}
                      fontSize="xl"
                      isPreviewFocusable={false}
                      style={{ display: 'flex', marginRight: '10px' }}
                      onSubmit={value => handleDescChange(value, i)}
                    >
                      <EditablePreview />
                      &nbsp;
                      {/* Here is the custom input */}
                      <Input as={EditableInput} />
                      <EditableControls />
                    </Editable>
                    {/* <i>{item.desc}</i> */}
                  </p>
                  <br />
                  {/* <SimpleGrid column={3}>{disp(item)}</SimpleGrid> */}
                  <SimpleGrid columns={3} spacingX="40px" spacingY="20px">
                    {disp(item, i)}
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Collection
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default View;
