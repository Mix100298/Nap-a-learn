import Layout from "../../components/Layout"
import Head from "next/head"
import { Center, Heading, Box, Flex } from "@chakra-ui/react"
import Colour from "../../color/napalearncolor"
import Pomodoro from "../../components/Pomodoro"
import NoteTab from "../../components/NoteTab";
import PianoIns from "../../components/PianoIns";

export default function PianoTherapy() {

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
          <Heading size='2xl'>Piano Therapy</Heading>
          <Box sx={line} alignItems='center'></Box>
          <Center>
            <Flex gap={32}>
              <NoteTab />
              <Box marginTop={50}>
                <Pomodoro />
              </Box>
            </Flex>
          </Center>
          <PianoIns />
        </div>
      </Layout>
    </div>
  )
}