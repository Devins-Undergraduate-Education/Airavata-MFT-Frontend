
import {
    Heading,
    Container,
    Box,
    Flex,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';

export default function InstallApacheAiravata() {
    return (
        <>
            <NavBar />
            <Container maxW='container.2xl' p={4}>
                <Flex justify='space-between' alignItems='center'>
                    <Heading color='blue.600' size='lg'>Installing Apache Airavata</Heading>
                </Flex>
                <Tabs mt={8} variant='unstyled'>
                    <TabList>
                        <Tab rounded='md' _selected={{ color: 'white', bg: '#7B506F' }}>Windows</Tab>
                        <Tab rounded='md' _selected={{ color: 'white', bg: '#6957B2' }}>Linux / MacOS</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel bg='#E7DAE3' p={4} rounded='md'>
                            <Windows />
                        </TabPanel>
                        <TabPanel bg='#E6E3F2' p={4} rounded='md'>
                            <LinuxMacOS />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    );
}

const Windows = () => {
    return (
        <>
            <h1>Installation Steps for Windows</h1>
            <br />
            <Box marginLeft='20px'>
                <ol>
                    <li>Install a Linux OS <i>(Ubuntu will be used for this guide)</i></li>
                    <li>When prompted, create a default UNIX user account or login</li>
                    <li>Ensure the default directory is a user directory, not a root directory</li>
                    <i>Find the current directory via <b>pwd</b>. The directory should be <b>/home/[...]</b></i>
                    <br />
                    <i>If the current directory is <b>/root/[...]</b>, uninstall the Linux OS and reinstall</i>
                    <li>cd into user directory file locations via <b>cd /mnt/c</b></li>
                    <li>cd into project file directory</li>
                    <i>To find the current position within a directory, type <b>ls</b></i>
                    <br />
                    <i>To go back one directory, type <b>cd..</b></i>
                    <li>Install necessary packages</li>
                    <Box marginLeft='30px'>
                        <ul>
                            <b>
                                <li>sudo apt update</li>
                                <li>sudo ape install python3-pip</li>
                                <li>sudo apt install default-jre</li>
                            </b>
                        </ul>
                    </Box>
                    <li>Create a python virtual environment via <b>python3.10 -m venv venv</b></li>
                    <li>Activate the virtual environment via <b>source venv/bin/activate</b></li>
                    <li>Install Apache Airavata via <b>pip install airavata-mft-cli</b></li>
                    <li>Start Apache Airavata MFT via <b>mft init</b></li>
                </ol>
                <br /><br />
            </Box>
            If the MFT server is unable to be started via <b>mft init</b>, there may be an instance<br />
            of MFT already running. To resolve this issue, run the following commands:<br />
            <Box marginLeft='30px'>
                <ul>
                    <b>
                        <li>cd ~/.mft/Standalone-Service-0.01/bin</li>
                        <li>./standalone-service-daemon.sh stop</li>
                        <li>./standalone-service-daemon.sh start</li>
                    </b>
                </ul>
            </Box>
        </>
    );
};

const LinuxMacOS = () => {
    return (
        <>
            <h1>Installation Steps for Linux / MacOS</h1>
            <br />
            The GitHub for Apache Airavata provides detailed instructions for installation <br />
            on Linus and MacOS devices. It is highly recommend to start there. <br /><br />
            <Box marginLeft='20px'>
                <ol>
                    <li>cd into project file directory</li>
                    <i>To find the current position within a directory, type <b>ls</b></i>
                    <br />
                    <i>To go back one directory, type <b>cd..</b></i>
                    <li>Create a python virtual environment via <b>python3.10 -m venv venv</b></li>
                    <li>Activate the virtual environment via <b>source venv/bin/activate</b></li>
                    <li>Install Apache Airavata via <b>pip install airavata-mft-cli</b></li>
                    <li>Start Apache Airavata MFT via <b>mft init</b></li>
                </ol>

                <br /><br />
            </Box>
            If the MFT server is unable to be started via <b>mft init</b>, there may be an instance<br />
            of MFT already running. To resolve this issue, run the following commands:<br />
            <Box marginLeft='30px'>
                <ul>
                    <b>
                        <li>cd ~/.mft/Standalone-Service-0.01/bin</li>
                        <li>./standalone-service-daemon.sh stop</li>
                        <li>./standalone-service-daemon.sh start</li>
                    </b>
                </ul>
            </Box>
        </>
    );
};
