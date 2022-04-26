import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Container,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/actions';
import { useNavigate } from 'react-router-dom';

// import Popup from 'reactjs-popup';

import UploadF from './Upload';

const Create = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [fileList, setFileList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  const { role, token } = useSelector(state => state.userDetails);

  /*dispatch({
  type: actionTypes.CHANGE_USER,
  userDetails: res.data,
});*/

  const isNameError = name === ' ';
  const isDescError = desc === ' ';

  const AddCollection = () => {
    console.log(name, desc, fileList);
    const collectionObj = {name,desc,fileList};
    dispatch({
      type: actionTypes.ADD_COLLECTION,
      collectionDetails: collectionObj,
    });
    navigate('/viewCollections')
  };
  return (
    <div>
      <VStack spacing={4}>
        <Container maxW="md" align="center" style={{ marginTop: '1%' }}>
          <Box h="100px" as={Heading}>
            Create Collection
          </Box>
          <Box>
            <FormControl isInvalid={isNameError}>
              <FormLabel htmlFor="Name">Name</FormLabel>
              <Input
                id="Name"
                type="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              {!isNameError ? (
                <FormHelperText>
                  Enter the name of your collection.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
          </Box>

          <Box>
            <FormControl isInvalid={isDescError}>
              <FormLabel htmlFor="Description">Description</FormLabel>
              <Input
                id="Description"
                type="Description"
                value={desc}
                onChange={e => setDesc(e.target.value)}
                required
              />
              {!isDescError ? (
                <FormHelperText>
                  Enter the Description of your collection.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Description is required.</FormErrorMessage>
              )}
            </FormControl>
            <br />
            <UploadF fileList={fileList} setFileList={setFileList} />
            <br />
          </Box>
          <Button onClick={AddCollection} disabled={isDescError || isNameError || fileList.length === 0}>+ Create Collection</Button>
          {/* <Popup
            style={{ maxHeight: '300px' }}
            trigger={}
            modal
            nested
          >
            
          </Popup> */}
          <Box></Box>
        </Container>
      </VStack>
    </div>
  );
};

export default Create;
