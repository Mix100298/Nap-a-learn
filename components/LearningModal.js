import {
  Alert, AlertIcon, Box, Button, Flex, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Textarea, useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineTopic } from "react-icons/md";
import Colour from "../color/napalearncolor";
import axios from 'axios';
import url from '../pages/url';

export default function LearningModal({ isOpen, onClose, mode }) {

  const [form, setForm] = useState(
    { topic: "", forskill: "", url: "", content: "" })
  const [wrong, setWrong] = useState(false)
  const [wrongWord, setWrongWord] = useState('')
  const toast = useToast()

  const onSummitClick = () => {
    console.log('summit clicked!')
    if (form.topic && form.forskill && form.url && form.content) {
      setWrong(false)
      if (mode == 1) {
        axios.post(`${url}/api/Manage/addManage/addLearnArti`, form,)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
      else {
        axios.post(`${url}/api/Manage/addManage/addLearnMa`, form,)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
      toast({
        title: 'Success submit',
        description: "Addition is complete",
        status: 'success',
        duration: 3000,
        isClosable: false,
      })
      console.log('form is valid')
      onClose()
      setForm({ topic: "", forskill: "", url: "", content: "" })
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
    else {
      setWrong(true)
      setWrongWord('Please complete all fields')
      console.log('form is not valid')
    }
  }

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        size='4xl'
      >
        <ModalOverlay />
        <ModalContent>
          {(mode) == 1 ?
            <ModalHeader>Add Learning Article </ModalHeader> :
            <ModalHeader>Add Learning Material </ModalHeader>}
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup size='md'>
                <InputLeftElement pointerEvents='none' children={<MdOutlineTopic size={20} color="black" />} />
                <Input placeholder='Topic' _placeholder={{ opacity: 1, color: 'black' }}
                  focusBorderColor={Colour.FirstPink} color="black" colorScheme="black"
                  value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} />
              </InputGroup>
              <Flex gap={4}>
                <Select placeholder='ForSkill' _placeholder={{ opacity: 1, color: 'black' }}
                  focusBorderColor={Colour.FirstPink} color="black" colorScheme="black"
                  value={form.forskill} onChange={(e) => setForm({ ...form, forskill: e.target.value })}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Flex>
              <InputGroup size='md'>
                <InputLeftElement pointerEvents='none' children={<AiOutlinePicture size={20} color="black" />} />
                <Input placeholder='URL' _placeholder={{ opacity: 1, color: 'black' }}
                  focusBorderColor={Colour.FirstPink} color="black" colorScheme="black"
                  value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
              </InputGroup>
              <Textarea placeholder='Content' _placeholder={{ opacity: 1, color: 'black' }}
                focusBorderColor={Colour.FirstPink} color="black" colorScheme="black"
                value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
              <Box>
                {
                  (wrong) ?
                    <Alert status='error'
                      bg='none'
                      color='red'
                      position='absolute'
                      align='center'
                    >
                      <AlertIcon />
                      {wrongWord}
                    </Alert>
                    : null
                }
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button bg={Colour.FirstPink} color='White' mr={3} onClick={() => onSummitClick()}
              _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}>
              Publish
            </Button>
            <Button bg='red' color='White' onClick={onClose}
              _hover={{ bg: 'White', border: '2px solid', color: 'red' }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}