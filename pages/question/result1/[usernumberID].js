import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Tab,
  TabList, TabPanel, TabPanels, Tabs, Text, VStack
} from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import NextLink from "next/link";
import Colour from "../../../color/napalearncolor";
import BoxAllSkillI from '../../../components/BoxAllSkillI';
import BoxSummary from "../../../components/BoxSummaryI";
import BoxNoData from '../../../components/BoxNoData';
import Layout from "../../../components/Layout";
import url from '../../url';
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router';
import Loading from '../../../components/SubLoading';

export default () => {

  const [loading, setLoading] = useState(false);

  let line = {
    width: '100%',
    marginTop: '12px',
    height: '2px',
    bgColor: Colour.Darkblue
  }
  let boxSelect = {
    padding: '8px',
    height: '40px',
    marginLeft: '20px',
    marginTop: '24px',
  }
  let boxResult = {
    bgColor: Colour.White,
    width: '80%',
    padding: '12px',
    paddingTop: '20px',
    paddingLeft: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '32px',
    marginBottom: '32px',
  }
  let boxButton = {
    bgColor: Colour.White,
    width: '40%',
    padding: '12px',
    marginTop: '24px',
    marginBottom: '24px',
  }
  let boxData = {
    width: '90%',
    marginTop: '32px',
  }
  let boxData1 = {
    bgColor: Colour.White,
  }

  const router = useRouter()
  const userID = router.query.usernumberID
  console.log(userID)
  const [result, setResult] = useState([])

  const fetchData = async () => {
    let result = await axios.get(`${url}/api/Result/getResult1/${userID}`, {
    })
    setResult(result.data)
    console.log(result)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    if (userID) { fetchData() }
  }, [])


  let response1 = parseInt(result.response1)
  let response2 = parseInt(result.response2)
  let response3 = parseInt(result.response3)
  let response4 = parseInt(result.response4)
  let response5 = parseInt(result.response5)
  let response6 = parseInt(result.response6)
  let response7 = parseInt(result.response7)
  let response8 = parseInt(result.response8)
  let response9 = parseInt(result.response9)
  let response10 = parseInt(result.response10)
  let response11 = parseInt(result.response11)
  let response12 = parseInt(result.response12)
  let response13 = parseInt(result.response13)
  let response14 = parseInt(result.response14)
  let response15 = parseInt(result.response15)
  let response16 = parseInt(result.response16)
  let response17 = parseInt(result.response17)
  let response18 = parseInt(result.response18)
  let response19 = parseInt(result.response19)
  let response20 = parseInt(result.response20)
  let point = response1 + response2 + response3 + response4 + response5 + response6 + response7 + response8 + response9 + response10 +
    response11 + response12 + response13 + response14 + response15 + response16 + response17 + response18 + response19 + response20
  let check = (point) < 0 ? 1 : 0
  let skill1 = (response1 + response2) == 0 ? 0 : 1
  let skill2 = (response3 + response4) == 0 ? 0 : 1
  let skill3 = (response5 + response6) == 0 ? 0 : 1
  let skill4 = (response7 + response8) == 0 ? 0 : 1
  let skill5 = (response9 + response10) == 0 ? 0 : 1
  let skill6 = (response11 + response12) == 0 ? 0 : 1
  let skill7 = (response13 + response14) == 0 ? 0 : 1
  let skill8 = (response15 + response16) == 0 ? 0 : 1
  let skill9 = (response17 + response18) == 0 ? 0 : 1
  let skill10 = (response19 + response20) == 0 ? 0 : 1
  let pointskills = skill1 + skill2 + skill3 + skill4 + skill5 + skill6 + skill7 + skill8 + skill9 + skill10
  let passvalue = (pointskills) >= 8 ? 1 : 0
  let data = [
    { title: "ผ่าน", value: pointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 10 - pointskills, color: "#FF7121" },
  ];

  let aresponse1 = parseInt(result.aresponse1)
  let aresponse2 = parseInt(result.aresponse2)
  let aresponse3 = parseInt(result.aresponse3)
  let aresponse4 = parseInt(result.aresponse4)
  let aresponse5 = parseInt(result.aresponse5)
  let aresponse6 = parseInt(result.aresponse6)
  let aresponse7 = parseInt(result.aresponse7)
  let aresponse8 = parseInt(result.aresponse8)
  let aresponse9 = parseInt(result.aresponse9)
  let aresponse10 = parseInt(result.aresponse10)
  let aresponse11 = parseInt(result.aresponse11)
  let aresponse12 = parseInt(result.aresponse12)
  let aresponse13 = parseInt(result.aresponse13)
  let aresponse14 = parseInt(result.aresponse14)
  let aresponse15 = parseInt(result.aresponse15)
  let aresponse16 = parseInt(result.aresponse16)
  let aresponse17 = parseInt(result.aresponse17)
  let aresponse18 = parseInt(result.aresponse18)
  let aresponse19 = parseInt(result.aresponse19)
  let aresponse20 = parseInt(result.aresponse20)
  let apoint = aresponse1 + aresponse2 + aresponse3 + aresponse4 + aresponse5 + aresponse6 + aresponse7 + aresponse8 + aresponse9 + aresponse10 +
    aresponse11 + aresponse12 + aresponse13 + aresponse14 + aresponse15 + aresponse16 + aresponse17 + aresponse18 + aresponse19 + aresponse20
  let acheck = (apoint) < 0 ? 1 : 0
  let ause = (apoint) < 0 ? 0 : apoint
  let askill1 = (aresponse1 + aresponse2) == 0 ? 0 : 1
  let askill2 = (aresponse3 + aresponse4) == 0 ? 0 : 1
  let askill3 = (aresponse5 + aresponse6) == 0 ? 0 : 1
  let askill4 = (aresponse7 + aresponse8) == 0 ? 0 : 1
  let askill5 = (aresponse9 + aresponse10) == 0 ? 0 : 1
  let askill6 = (aresponse11 + aresponse12) == 0 ? 0 : 1
  let askill7 = (aresponse13 + aresponse14) == 0 ? 0 : 1
  let askill8 = (aresponse15 + aresponse16) == 0 ? 0 : 1
  let askill9 = (aresponse17 + aresponse18) == 0 ? 0 : 1
  let askill10 = (aresponse19 + aresponse20) == 0 ? 0 : 1
  let apointskills = askill1 + askill2 + askill3 + askill4 + askill5 + askill6 + askill7 + askill8 + askill9 + askill10
  let apassvalue = (apointskills) >= 8 ? 1 : 0
  let adata = [
    { title: "ผ่าน", value: apointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 10 - apointskills, color: "#FF7121" },
  ];

  let bresponse1 = parseInt(result.bresponse1)
  let bresponse2 = parseInt(result.bresponse2)
  let bresponse3 = parseInt(result.bresponse3)
  let bresponse4 = parseInt(result.bresponse4)
  let bresponse5 = parseInt(result.bresponse5)
  let bresponse6 = parseInt(result.bresponse6)
  let bresponse7 = parseInt(result.bresponse7)
  let bresponse8 = parseInt(result.bresponse8)
  let bresponse9 = parseInt(result.bresponse9)
  let bresponse10 = parseInt(result.bresponse10)
  let bresponse11 = parseInt(result.bresponse11)
  let bresponse12 = parseInt(result.bresponse12)
  let bresponse13 = parseInt(result.bresponse13)
  let bresponse14 = parseInt(result.bresponse14)
  let bresponse15 = parseInt(result.bresponse15)
  let bresponse16 = parseInt(result.bresponse16)
  let bresponse17 = parseInt(result.bresponse17)
  let bresponse18 = parseInt(result.bresponse18)
  let bresponse19 = parseInt(result.bresponse19)
  let bresponse20 = parseInt(result.bresponse20)
  let bpoint = bresponse1 + bresponse2 + bresponse3 + bresponse4 + bresponse5 + bresponse6 + bresponse7 + bresponse8 + bresponse9 + bresponse10 +
    bresponse11 + bresponse12 + bresponse13 + bresponse14 + bresponse15 + bresponse16 + bresponse17 + bresponse18 + bresponse19 + bresponse20
  let bcheck = (bpoint) < 0 ? 1 : 0
  let buse = (bpoint) < 0 ? 0 : bpoint
  let bskill1 = (bresponse1 + bresponse2) == 0 ? 0 : 1
  let bskill2 = (bresponse3 + bresponse4) == 0 ? 0 : 1
  let bskill3 = (bresponse5 + bresponse6) == 0 ? 0 : 1
  let bskill4 = (bresponse7 + bresponse8) == 0 ? 0 : 1
  let bskill5 = (bresponse9 + bresponse10) == 0 ? 0 : 1
  let bskill6 = (bresponse11 + bresponse12) == 0 ? 0 : 1
  let bskill7 = (bresponse13 + bresponse14) == 0 ? 0 : 1
  let bskill8 = (bresponse15 + bresponse16) == 0 ? 0 : 1
  let bskill9 = (bresponse17 + bresponse18) == 0 ? 0 : 1
  let bskill10 = (bresponse19 + bresponse20) == 0 ? 0 : 1
  let bpointskills = bskill1 + bskill2 + bskill3 + bskill4 + bskill5 + bskill6 + bskill7 + bskill8 + bskill9 + bskill10
  let bpassvalue = (bpointskills) >= 8 ? 1 : 0
  let bdata = [
    { title: "ผ่าน", value: bpointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 10 - bpointskills, color: "#FF7121" },
  ];

  let cresponse1 = parseInt(result.cresponse1)
  let cresponse2 = parseInt(result.cresponse2)
  let cresponse3 = parseInt(result.cresponse3)
  let cresponse4 = parseInt(result.cresponse4)
  let cresponse5 = parseInt(result.cresponse5)
  let cresponse6 = parseInt(result.cresponse6)
  let cresponse7 = parseInt(result.cresponse7)
  let cresponse8 = parseInt(result.cresponse8)
  let cresponse9 = parseInt(result.cresponse9)
  let cresponse10 = parseInt(result.cresponse10)
  let cresponse11 = parseInt(result.cresponse11)
  let cresponse12 = parseInt(result.cresponse12)
  let cresponse13 = parseInt(result.cresponse13)
  let cresponse14 = parseInt(result.cresponse14)
  let cresponse15 = parseInt(result.cresponse15)
  let cresponse16 = parseInt(result.cresponse16)
  let cresponse17 = parseInt(result.cresponse17)
  let cresponse18 = parseInt(result.cresponse18)
  let cresponse19 = parseInt(result.cresponse19)
  let cresponse20 = parseInt(result.cresponse20)
  let cpoint = cresponse1 + cresponse2 + cresponse3 + cresponse4 + cresponse5 + cresponse6 + cresponse7 + cresponse8 + cresponse9 + cresponse10 +
    cresponse11 + cresponse12 + cresponse13 + cresponse14 + cresponse15 + cresponse16 + cresponse17 + cresponse18 + cresponse19 + cresponse20
  let cuse = (cpoint) < 0 ? 0 : cpoint

  return (
    <div className="">
      <Head>
        <title>Nap A Learn Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Layout>
      <Loading isLoading={loading} />
        <div className="p-4 mt-1">
          <Heading size='xl'>ผลการคัดกรองบุคคลที่มีความบกพร่องทางสติปัญญา</Heading>
          <Box sx={line}></Box>
          {(check) == 1 ?
            <Flex align="center" justify="center">
              <Box sx={boxResult} boxShadow='md' p='6' rounded='md' align="center" justify="center">
                <Box sx={boxButton}>
                  <Heading>ยังไม่ได้ทำการทดสอบ</Heading>
                </Box>
                <Box sx={boxButton} justify="center">
                  <NextLink href="/question/question1" passHref>
                    <Button width='100%' borderRadius='md' bg={Colour.FirstPink} color='White' size='lg'
                      _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}>
                      Go to Questionnaire
                    </Button>
                  </NextLink>
                </Box>
              </Box>
            </Flex> :
            <Tabs variant='soft-rounded' colorScheme="pink">
              <Box sx={boxSelect}>
                <TabList>
                  <Tab _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}>ผลการทดสอบปัจจุบัน</Tab>
                  <Tab _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}>ผลการทดสอบย้อนหลัง 2 ครั้งล่าสุด</Tab>
                </TabList>
              </Box>
              <TabPanels>
                <TabPanel>
                  <VStack spacing={8} align="center">
                    <BoxSummary point={point} pointbefore={ause} passvalue={passvalue} />
                    <BoxAllSkillI skill1={skill1} skill2={skill2} skill3={skill3} skill4={skill4} skill5={skill5}
                      skill6={skill6} skill7={skill7} skill8={skill8} skill9={skill9} skill10={skill10} data={data} />
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <Flex justifyContent='center'>
                    <Box sx={boxData} align="center" >
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <Box sx={boxData1}>
                              <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                  {(result.adatetime) == -1 ? <Text>ไม่มีข้อมูลย้อนหลัง</Text> :
                                    <Text>ข้อมูลย้อนหลังวันที่ {result.adatetime}</Text>}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </Box>
                          </h2>
                          <AccordionPanel pb={4}>
                            {/* oldData #1 */}
                            {(acheck) == 1 ?
                              <BoxNoData /> :
                              <VStack spacing={8} align="center">
                                <BoxSummary point={apoint} pointbefore={buse} passvalue={apassvalue} />
                                <BoxAllSkillI skill1={askill1} skill2={askill2} skill3={askill3} skill4={askill4} skill5={askill5}
                                  skill6={askill6} skill7={askill7} skill8={askill8} skill9={askill9} skill10={askill10} data={adata} />
                              </VStack>}
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <Box sx={boxData1}>
                              <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                  {(result.bdatetime) == -1 ? <Text>ไม่มีข้อมูลย้อนหลัง</Text> :
                                    <Text>ข้อมูลย้อนหลังวันที่ {result.bdatetime}</Text>}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </Box>
                          </h2>
                          <AccordionPanel>
                            {/* oldData #2 */}
                            {(bcheck) == 1 ?
                              <BoxNoData /> :
                              <VStack spacing={8} align="center">
                                <BoxSummary point={bpoint} pointbefore={cuse} passvalue={bpassvalue} />
                                <BoxAllSkillI skill1={bskill1} skill2={bskill2} skill3={bskill3} skill4={bskill4} skill5={bskill5}
                                  skill6={bskill6} skill7={bskill7} skill8={bskill8} skill9={bskill9} skill10={bskill10} data={bdata} />
                              </VStack>}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          }
        </div>
      </Layout>
    </div>
  );
}

