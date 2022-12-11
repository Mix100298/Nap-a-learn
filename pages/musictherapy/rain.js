import Layout from "../../components/Layout"
import Head from "next/head"
import { Heading, Box } from "@chakra-ui/react"
import Colour from "../../color/napalearncolor"
import Sound from "../../components/Sound"

export default function Rain() {

    let line = {
        width: '900',
        height: '2px',
        bgColor: Colour.Darkblue,
        marginTop: '12px',
        marginBottom: '12px',
    }

    return (
        <div>
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <div className="p-4 mt-1">
                    <Heading size='2xl'>Rain Sound</Heading>
                    <Box sx={line}></Box>
                    <Sound src='https://www.youtube.com/embed/EBSegrHpreY' />
                </div>
            </Layout>
        </div>
    )
}

