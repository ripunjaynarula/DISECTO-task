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
  Heading,Button
} from '@chakra-ui/react';
import { useState } from 'react';
import Upload from './Upload';

const Create = () => {
  const [input, setInput] = useState('');

  const handleInputChange = e => setInput(e.target.value);

  const isError = input === ' ';
  
  return (
    <div>
      <VStack spacing={4}>
        <Container maxW="md" align="center" style={{ marginTop: '1%' }}>
          <Box h="100px" as={Heading}>Create Collection</Box>
          <Box>
            <FormControl isInvalid={isError}>
              <FormLabel htmlFor="Name">Name</FormLabel>
              <Input
                id="Name"
                type="Name"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the name of your collection.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
          </Box>

          <Box>
            <FormControl isInvalid={isError}>
              <FormLabel htmlFor="Description">Description</FormLabel>
              <Input
                id="Description"
                type="Description"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the Description of your collection.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Description is required.</FormErrorMessage>
              )}
            </FormControl><br/>
            <Upload/>
          </Box>
                <Button>+ Create and add Photos</Button>
          <Box>
          </Box>
        </Container>
      </VStack>
    </div>
  );
};

export default Create;
