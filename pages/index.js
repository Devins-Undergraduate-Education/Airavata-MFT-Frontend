import { useEffect } from 'react';
import
{
  Box, Heading, Container, Text
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
        <Box textAlign='justify' maxW='700px' mx='auto'>
          <Heading fontWeight='black' fontSize='5xl' color = '#f8ab9d' textAlign='center'>
            Apache<Text as='span' color='#5dcbee'>Airavata</Text>
          </Heading>

          <Text mt={4}> Welcome to a local application of Apache Airavata Managed File Transfers. This application allows users to interact with MFT by displaying storages directly from MFT. Future functionalities to come!</Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>What is Apache Airavata?</Text>
          <Text>Apache Airavata, developed by the Apache Software Foundation, manages and executes computational tasks and workflows across distributed resources like HPC clusters and cloud platforms. It offers workflow creation and management, resource integration, job submission and monitoring, data management, collaboration support, and robust security features.  </Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>What can this UI do?</Text>
          <Text>This UI is able to list storages, view files within the invidual storage, and browse through the files in the storages. Furthermore, a step-by-step guide is included to ensure users are able to confidently deploy MFT. </Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>How does this work?</Text>
          <Text>This application combines a frontend and a backend to ultimately create what you are looking at now. The frontend creates a graphical interface that is functional and allows ease-of-use. The backend creates a connection layer between your local system and the MFT server, allowing for your computer to basically talk to MFT though this UI.</Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>What's next?</Text>
          <Text>There's a lot more work to do! Progress is still being made to allow users to properly add storages, move files, copy files, and download files. If you would like to contribute, please check out the Apache Airavata GitHub!</Text>

          <Text fontSize='lg' fontWeight='bold' mt={8}>Who contributed to this project?</Text>
          <Text>This application was headed by Devin Fromond, Sagor Levy, and Ameerah Mourad. The backend of this UI was inspired by the work and contributions of Ganning Xu and Dimuthu Wannipurage.</Text>


          {/* <Button as='a' href='/list-storages' colorScheme='darkgreen' mt={4}>Get Started</Button> */}
        </Box>

      </Container >

    </>
  );
}
