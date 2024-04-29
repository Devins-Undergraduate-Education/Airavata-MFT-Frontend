import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import
{
  Box, Link, Heading, Container, Text
} from '@chakra-ui/react';

import { NavBar } from '../components/NavBar';

export default function Home()
{
  useEffect(() =>
  {
    async function getData()
    {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log('gah', data);
    }

    getData();
  }, []);


  return (
    <>
      <NavBar />


      <Container maxW='container.2xl' p={4}>
        <Box textAlign='center' maxW='600px' mx='auto'>
          <Heading fontWeight='black' fontSize='5xl'>
            Airavata MFT <Text as='span' color='darkgreen'>Browser</Text>
          </Heading>

          <Text mt={4}> Welcome to a local application of Apache Airavata Managed File Transfers. This application allows users to interact with MFT and </Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>How It Works</Text>
          <Text>This application was written by Devin, Sagor, and Ameerah to permit users to navigate through files in MFT storages. The application combines both a frontend which creates a graphical interface that is functional and easy to use along with the backend which creates a connection between your local system and the application. The backend was inspired by the work and contributions of Ganning Xi and Dimuthu Wannipurage.  </Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>Features</Text>
          <Text>Right now, you can list storages, view files within them, and browse through those files. However, adding storages, moving or copying files, and downloading files are still in progress.</Text>


          {/* <Button as='a' href='/list-storages' colorScheme='darkgreen' mt={4}>Get Started</Button> */}
        </Box>

      </Container >


    </>
  );
}
