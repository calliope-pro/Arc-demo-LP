import {
  Box,
  chakra,
  Container,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      {isMobile ? (
        <Image src='/company3.webp' alt='company3' />
      ) : (
        <Image src='/company2.webp' alt='company2' />
      )}

      <Box bg='blue.900' color='gray.200'>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Box>
            <SimpleGrid
              py={5}
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 6, md: '60' }}
            >
              <Box textAlign='center' fontSize={60}>
                Logo
              </Box>
              <Stack h='100%' justifyContent='center'>
                <Box fontSize={20}>xxx社</Box>
                <Box fontSize={16}>〒xxx-xxxx</Box>
                <Box fontSize={20}>xxx社</Box>
                <Box fontSize={16}>〒xxx-xxxx</Box>
              </Stack>
            </SimpleGrid>
          </Box>
          <Divider w='100%' />
          <Text>© {new Date().getFullYear()} Company All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
