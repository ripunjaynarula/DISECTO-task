import React from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import 'reactjs-popup/dist/index.css';
import Collections from '../collection.json';
import Images from '../img.json';
import {
  Container,
  Box,
  Heading,
  Center,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiFolder } from 'react-icons/bi';

const View = () => {
  function disp(col) {
    return Images.Images.map((img, j) => {
      if (col === img.Collection) {
        return (
          <>
            <div class="card" key={j}>
              <img src={img.Image} alt={img.Name} />
              <div class="container">
                <h4 style={{ paddingTop: '5px' }}>
                  <b>{img.Name}</b>
                </h4>
                <p>{img.Desc}</p>
              </div>
            </div>
          </>
        );
      }
      return null;
    });
  }
  return (
    <div>
      <Container maxW="md" align="center" style={{ marginTop: '5%' }}>
        <Box h="100px" as={Heading}>
          All Collections
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing="100px">
          {Collections.Collections.map((item, i) => (
            <Center key={i}>
              <Popup
                style={{ maxHeight: '300px' }}
                trigger={
                  <Button style={{ minWidth: '10vw', minHeight: '20vh',display: 'flex',flexDirection: 'column',gap: '10px' }}>
                    <Box>
                      {' '}
                      <BiFolder
                        size={50}
                        style={{ align: 'center' }}
                        overflow="hidden"
                      />
                    </Box>
                    <Box>{item.Name}</Box>
                  </Button>
                }
                modal
                nested
              >
                <Box className="modal">
                  <Heading as="h4">{item.Name}</Heading>
                  <br />
                  <SimpleGrid minChildWidth="0px" spacing="4px">
                    {disp(item.Col)}
                  </SimpleGrid>
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
