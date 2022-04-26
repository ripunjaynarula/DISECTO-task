import React from 'react';
import Theme from '../Theme';
import { useSelector } from 'react-redux';


import {
  ChakraProvider,
  Box,
  VStack,
  Button,
  Link,
  Heading,
  Grid,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Main() {

  const collectionDetails = useSelector(state => state.collectionDetails);

  return (
    <div>
      <ChakraProvider theme={Theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="70vh" p={3}>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}

            <VStack spacing="30px" justify="center">
              <Box as={Heading}>Photo Gallery</Box>
              <Box>
                <Button
                  as={Link}
                  href="/createCollection"
                  style={{ textDecoration: 'none' }}
                >
                  {' '}
                  + Create Collection{' '}
                </Button>
                &nbsp; &nbsp;
                <Button
                  as={Link}
                  href="/viewCollections"
                  style={{ textDecoration: 'none' }}
                  disabled={collectionDetails.length===0}
                >
                  {' '}
                  View Collections{' '}
                </Button>
              </Box>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    </div>
  );
}
