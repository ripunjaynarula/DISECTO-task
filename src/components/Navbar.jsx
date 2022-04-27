import React from 'react';
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Stack,
  Link,
  Image,
} from '@chakra-ui/react';

const Links = ['Home'];

const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={'/'}
  ></Link>
);

export default function Navbar() {
  // const { isOpen} = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={8} alignItems={'center'}>
            <Box as={Link} href="/">
              <Image src="https://www.disecto.com/static/media/logo.244765c6.svg" />
            </Box>
          </HStack>
        </Flex>

        {/* {isOpen ? ( */}
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
        {/* ) : null} */}
      </Box>
    </>
  );
}
