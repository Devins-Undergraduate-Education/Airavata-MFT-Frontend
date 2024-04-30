import { Box, Flex, Link, Text, Heading } from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <Box>
      <Flex p={4} justify='space-between' alignItems='center' shadow='md'>
        <Box>
          <Heading fontWeight='black' fontSize='2xl' color='#f8ab9d' textAlign='center'>
            Apache<Text as='span' color='#5dcbee'>Airavata</Text>
          </Heading>
        </Box>

        <Flex gap={6} color='#2E4660' fontWeight='bold' css={{
          '& > *': {
            transition: 'font-weight 0.3s ease-in-out',
          },
          '& > *:hover': {
            fontWeight: 'extrabold',
          },
        }}>
          <Link href='/'>FAQs</Link>
          <Link href='/install-apache-airavata'>Installation</Link>
          <Link href='/list-storages'>List Storages</Link>
          <Link href='/add-storage'>Add Storage</Link>
        </Flex>
      </Flex>
    </Box>
  );
};
