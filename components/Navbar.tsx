import NextLink from 'next/link';
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  Stack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        pos='sticky'
        h={16}
        px='5%'
        top={0}
        zIndex={100}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box cursor='pointer'>
          <NextLink href='/'>
            <Text fontSize={40}>Company</Text>
          </NextLink>
        </Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <IconButton
              aria-label='open drawer'
              background='none'
              icon={<HamburgerIcon fontSize={50} />}
              cursor={'pointer'}
              onClick={onOpen}
            />
            <Drawer onClose={onClose} isOpen={isOpen} size='full'>
              <DrawerOverlay />
              <DrawerContent opacity={0.9}>
                <DrawerCloseButton size='lg' />
                <Box textAlign='center'>
                  <DrawerHeader>
                    <NextLink href='/'>
                      <Text fontSize={40}>Company</Text>
                    </NextLink>
                  </DrawerHeader>
                  <Divider />
                  <DrawerBody onClick={onClose}>
                    <NextLink href='#about'>
                      <Text
                        py={3}
                        fontSize={20}
                        display='block'
                        _hover={{ color: 'blue.600' }}
                        transition='color 200ms'
                      >
                        概要
                      </Text>
                    </NextLink>
                    <NextLink href='#company'>
                      <Text
                        py={3}
                        fontSize={20}
                        display='block'
                        _hover={{ color: 'blue.600' }}
                        transition='color 200ms'
                      >
                        会社情報
                      </Text>
                    </NextLink>
                    <NextLink href='#contact'>
                      <Text
                        py={3}
                        fontSize={20}
                        display='block'
                        _hover={{ color: 'blue.600' }}
                        transition='color 200ms'
                      >
                        フォーム
                      </Text>
                    </NextLink>
                  </DrawerBody>
                </Box>
              </DrawerContent>
            </Drawer>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
