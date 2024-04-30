
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';

import
{
    Button,
    Heading,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Switch

} from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import { Notice } from '../components/Notice';
export default function AddStorage()
{
    return (
        <>
            <NavBar />
            <Notice status="info">
                This page is still under construction
            </Notice>

            <Container maxW='container.2xl' p={4}>

                <Flex justify='space-between' alignItems='center'>
                    <Heading color='#2E4660' size='lg'>Add Storage</Heading>

                    <Button bg='#496F97' size='sm' color='white' _hover={{
                        bg: '#2E4660'
                    }} as='a' href='/list-storages'>Back to List Storage</Button>
                </Flex>

                <Tabs mt={8} variant='unstyled'>
                    <TabList>
                        <Tab rounded='md' _selected={{ color: 'white', bg: '#CBA367' }}>SCP</Tab>
                        <Tab rounded='md' _selected={{ color: 'white', bg: '#C1666B' }}>S3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel bg='#E5D1B3' p={4} rounded='md'>
                            <SCPForm />
                        </TabPanel>
                        <TabPanel bg='#E2B6B8' p={4} rounded='md'>
                            <S3Form />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Container>
        </>
    );
}


const SCPForm = () =>
{
    return (
        <>
            <Formik
                initialValues={{
                    private_key_location: '~/.ssh/id_rsa',
                    public_key_location: '~/.ssh/id_rsa.pub',
                    passphrase: '',
                    host_name_ip: '172.172.240.41',
                    username: 'azureuser',
                    storage_name: 'scp-storage',
                }}
                onSubmit={(values, actions) =>
                {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name='private_key_location'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Private Key Location</FormLabel>
                                            <Input {...field} placeholder='private key location' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='public_key_location'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Public Key Location</FormLabel>
                                            <Input {...field} placeholder='public key location' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='passphrase'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl>
                                            <FormLabel>Passphrase</FormLabel>
                                            <Input {...field} placeholder='SSH passphrase' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='host_name_ip'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Host Name/IP</FormLabel>
                                            <Input {...field} placeholder='hostname/ip' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='username'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input {...field} placeholder='username' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>
                            <Field name='storage_name'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input {...field} placeholder='storage name' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                        </SimpleGrid>
                        <Button
                            mt={4}
                            variant='solid'
                            bg='#CBA367'
                            color='white'
                            _hover={{ bg: '#B6863E' }} 
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>

                    </Form>
                )}
            </Formik>

        </>
    );
};


const S3Form = () =>
{
    const [isSessionToken, setIsSessionToken] = useState(true);
    const [isS3Bucket, setIsS3Bucket] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    access_key_id: '???',
                    secret_access_key: '???',
                }}
                onSubmit={(values, actions) =>
                {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name='access_key_id'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Access Key ID</FormLabel>
                                            <Input {...field} placeholder='access_key_id' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>

                            <Field name='secret_access_key'>
                                {({ field, form }) => (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>Secret Access Key</FormLabel>
                                            <Input {...field} placeholder='secret_access_key' />
                                        </FormControl>
                                    </>
                                )}
                            </Field>


                            <FormControl>
                                <FormLabel>Session Token?</FormLabel>
                                <Switch 
                                    isChecked={isSessionToken}
                                    onChange={() => setIsSessionToken(!isSessionToken)} 
                                    colorScheme='red' 
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>AWS S3 Bucket?</FormLabel>
                                <Switch isChecked={isS3Bucket}
                                    onChange={() => setIsS3Bucket(!isS3Bucket)} colorScheme='red' />
                            </FormControl>

                        </SimpleGrid>

                        <Button
                            mt={4}
                            colorScheme='red'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    );
};
