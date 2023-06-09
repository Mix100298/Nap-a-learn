import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Text, Wrap, WrapItem} from '@chakra-ui/react';
import Head from "next/head";
import NextLink from "next/link";
import React from 'react';
import Colour from "../color/napalearncolor";
import Header from "../components/HeaderIndex.js";
import FeatureNAL from "../components/FeatureNAL.js";
import ProfileNAL from "../components/ProfileNAL.js";

export default function Index() {

  let bgColor = {
    width: '100%',
    height: '100%',
    bgColor: Colour.CreamP,
  }

  let container = {
    width: '100%',
    marginTop: '24px',
    padding: '12px',
  }

  let container1 = {
    width: '100%',
    marginTop: '30px',
    paddingLeft: '24px',
    paddingRight: '24px',
  }

  let boxText = {
    minWidth: '200px',
    maxWidth: '800px',
    padding: '12px',
    marginTop: '30px',
  }

  let boxContent = {
    width: '300px',
    padding: '12px',
  }

  let boxContent1 = {
    maxWidth: '270px',
    minWidth: '200px',
    backgroundColor: 'white',
    padding: '12px',
    boxShadow: 'md',
    rounded: 'md',
    marginTop: '18px',
  }

  let boxProfile = {
    maxwidth: '270px',
    minWidth: '200px',
    padding: '12px',
  }

  let devImage = {
    borderRadius: 'full',
    boxSize: '200px',
    minWidth: '200px'
  }

  let devText = {
    as: 'b',
    fontSize: '2xl'
  }

  let devHeading = {
    marginTop: '32px',
    marginBottom: '5px'
  }

  let informationHeadingText = {
    fontSize: '4xl',
    color: '#3E3C6E',
    fontWeight: 'bold'
  }

  let informationText = {
    textAlign: 'center',
    padding: '12px'
  }

  let startButton = {
    colorScheme: 'white',
    size: 'lg',
    backgroundColor: Colour.FirstPink,
    marginTop: '40px',
    marginBottom: '20px',
    _hover: {
      bg: 'White',
      border: '2px solid',
      color: Colour.FirstPink
    }
  }

  return (
    <div className="h-full flex items-center justify-center" >
      <Head>
        <title>Nap A Learn Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>

      <Box sx={bgColor} > {/* show text welcome to website*/}
        <Header />
        <Flex align="center" justify="center">
          <Box sx={container} align="center" justify="center">
            <Box sx={container1} align="center" justify="center">
              <Box>
                <Image src='/image/Nap_a_learn_LOGO.png' />
              </Box>
              <Heading as='h2' size='2xl' marginBottom='40px' minWidth='400px'>
                ยินดีต้อนรับสู่ Nap a Learn
              </Heading>
              <Heading as='h2' size='xl' minWidth='400px'>
                งีบก่อน เรียนทีหลัง :-)
              </Heading>
            </Box>
            <Box sx={boxText} align="center" justify="center">
              <Heading as='h2' size='xl' minWidth='200px'>
                “Nap a Learn” เป็นเว็บไซต์ที่มีจุดประสงค์เพื่อการศึกษาหาความรู้ ทั้งในทางปฏิบัติ และในทางความรู้ติดตัว นอกจากนั้นแล้ว ผู้ใช้เว็บไซต์ของพวกเรายังสามารถติดตามผลงานการเรียนรู้ต่างๆของตนเอง เพื่อประสิทธิภาพที่ดีที่สุดของการเรียนอีกด้วย</Heading>
            </Box>
            <Center>
              <NextLink href="/login" passHref>
                <Button colorScheme='white' size='lg' backgroundColor={Colour.FirstPink} marginTop='40px' marginBottom='20px' _hover={{
                  bg: 'White',
                  border: '2px solid',
                  color: Colour.FirstPink
                }}> มาเริ่มกันเลย ! </Button>
              </NextLink>
            </Center>
          </Box>
        </Flex>

        <Flex align="center" justify="center">
          <Box align="center" justify="center">
            <Box><Image src='/image/bear.png' width={300} height={300} /></Box>
            <Box><Heading as='h2' size='xl' marginTop='12px' marginBottom='12px' color='#3E3C6E'>
              มาดูกันว่า
            </Heading></Box>
            <Box><Heading as='h2' size='xl' marginBottom='60px' color='#3E3C6E'>
              Nap a Learn ทำอะไรได้บ้าง?
            </Heading></Box>
          </Box>
        </Flex>

        <Wrap spacing="30px" justify="center"> {/* show detail website*/}
          <WrapItem>
            <FeatureNAL topic='Questionaire' image='/image/QuestionaireMini.png'
            text='“Questionaire” เป็นฟีเจอร์์ที่ถูกจัดทำขึ้นเพื่อเป็นแบบ
            ทดสอบความพิการของผู้ใช้งาน เช่น ผู้พิการทางด้านสมองหรือผู้พิการ
            ออทิสติค เป็นต้น เมื่อทำแบบสอบถามเสร็จเรียบร้อยแล้ว ระบบจะทำการประเมินว่าผู้ใช้งานเว็บไซต์นั้นเข้าข่ายความพิการด้านไหน
            และเว็บไซต์จะนำความพิการนั้นไปปรับเนื้อหาการเรียนรู้ให้เหมาะสมกับผู้ใช้งานต่อไป'/>
          </WrapItem>
          <WrapItem>
            <FeatureNAL topic='Learning Materials' image='/image/LearningMaterialMini.png'
            text='“Learning Materials” เป็นฟีเจอร์ ที่ถูกจัดทำขึ้นเพื่อเสริมสร้างการเรียนรู้ของผู้ใช้งาน โดยจะแบ่งส่วนของฟีเจอร์ออกเป็นสอง
            ส่วนซึ่งก็คือ article และ material ซึ่งในส่วนของ article จะเป็นบทความเกี่ยวกับความรู้ต่างๆ เช่น วิธีการปรับบุคลิกภาพ เป็นต้น
            ในส่วนของ material จะเป็นรูปแบบการเรียนรู้ที่มีปฏิสัมพันธ์กับสิ่งที่เรียน เช่น การเล่นเกมปลูกผัก เพื่อให้ได้ความรู้การทำสวน เป็นต้น'/>
          </WrapItem>
          <WrapItem>
            <FeatureNAL topic='Professional Skills' image='/image/ProfessionalSkillMini.png'
            text='“Professional Skills” เป็นฟีเจอร์ ที่ถูกจัดทำขึ้นเพื่อเสริมสร้างการเรียนรู้ในรูปแบบของวิชาชีพ โดยจะแบ่งส่วนของฟีเจอร์ออกเป็น
            สองส่วนซึ่งก็คือ article และ workshop ซึ่งในส่วนของ article จะเป็นบทความเกี่ยวกับการเรียนรู้ที่เกี่ยวกับวิชาชีพ เช่น การปลูกผัก
            เป็นต้น ในส่วนของ workshop จะเป็นคลิป หรือ วิธีทำให้ทำตาม เช่น การผัดข้าวผัด เป็นต้น'/>
          </WrapItem>
          <WrapItem>
            <FeatureNAL topic='Music Therapy' image='/image/MusicTherapyMini.png'
            text='“Music Therapy” เป็นฟีเจอร์ ที่ถูกจัดทำขึ้นเพื่อเสริมสร้างความรู้สึกของผู้ใช้งาน ให้เกิดอารมณ์สุนทรีย์ และผ่อนคลายมากขึ้น
            นอกจากนั้นผู้ใช้งานยังสามารถเล่นดนตรี ตามแบบฝึกหัดง่ายๆ ที่มีอยู่ในเว็บไซต์อีกด้วย โดยเครื่องดนตรีจะมีให้เลือกอย่างหลากหลาย
            เช่น กลอง กีตาร์ เป็นต้น'/>
          </WrapItem>
        </Wrap>


        <Box sx={container} align="center" justify="center">
          <Heading marginTop='48px' color='#3E3C6E' > มาพัฒนาตัวเองไปกับพวกเรา! </Heading>
          <Box marginTop='60px'>
            <Image src='/image/workshop.png' width={1200} />
          </Box>
        </Box>

        <Box sx={container} align="center" justify="center">
          <Heading marginTop='48px' marginBottom='48px' color='black' > ทีมผู้จัดทำ </Heading>
        </Box>

        <Wrap spacing="30px" justify="center" marginBottom='60px'>
          <WrapItem>
            <ProfileNAL image='/image/witchayut.jpg' name='วิชยุฒม์ ช่วยชูกูล' id='63070501057'/>
          </WrapItem>
          <WrapItem>
            <ProfileNAL image='/image/sirawit2.jpg' name='สิรวิชญ์ วัฒโน' id='63070501071'/>
          </WrapItem>
          <WrapItem>
            <ProfileNAL image='/image/siriwat2.jpg' name='สิริวัฒน์ โชติเลอศักดิ์' id='63070501073'/>
          </WrapItem>
          <WrapItem>
            <ProfileNAL image='/image/sudarat2.jpg' name='สุดารัตน์ ร่มสุข' id='63070501074'/>
          </WrapItem>
        </Wrap>
      </Box>
    </div >
  );
}