import Head from "next/head";
import Layout from "../../../components/Layout";
import {Box, Heading, Flex, Wrap} from '@chakra-ui/react'
import Colour from "../../../color/napalearncolor"
import { useRouter } from 'next/router'
import axios from 'axios'
import url from '../../url'

export default (props) => {

    const router = useRouter()

    let line = {
        bgColor: Colour.Darkblue,
        width: '100%',
        marginTop: '12px',
        height: '2px',
    }

    let boxImage = {
        bgColor: Colour.Darkblue,
        width: '100%',
        marginTop: '36px',
    }

    let boxHeading = {
        width: '1300px',     
    }

    let boxText = {  
        width: '100%',      
        maxWidth: '1300px',
    }

    return (
        <div className="">
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <div className="p-4 mt-1">
                    <Heading size='2xl'>Article</Heading>
                    <Box sx={line}></Box>
                    <Flex align="center" justify="center">
                        <Wrap align='center' justify='center' spacingX='50px' spacingY='12px'>
                        <Flex>
                                <Box sx={boxImage}>
                                    <img src={props.data.url} width= '1300px' height= '400px'  ></img>
                                </Box>
                        </Flex>                        
                                <Box sx={boxHeading}>
                                    <Heading size='2xl' color="#3E3C6E" marginTop= '10px'>{props.data.topic}</Heading>
                                </Box>
                                <Box sx={boxText}>
                                <Heading size='md' marginTop= '10px'>{props.data.content}</Heading>
                                </Box>                       
                        </Wrap>
                    </Flex>
                </div>
            </Layout>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    let learningarticleID = context.params.learningarticleID
    const data = await axios.get(`${url}/api/LearningArticle/${learningarticleID}`)
    return {
        props: {
            data: data.data,
        }
    }
}