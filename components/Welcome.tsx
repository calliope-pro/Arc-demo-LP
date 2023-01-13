import { Box, Image, Text } from '@chakra-ui/react';

export const Welcome = () => {
  return (
    <Box pos='relative' mt={8}>
      <Image
        alt='company1'
        src='company1.jpg'
        filter='brightness(0.7)'
      />
      <Text
        fontSize={45}
        color='orange.200'
        pos='absolute'
        top='20%'
        left='50%'
        transform='translateX(-50%)'
      >
        message
      </Text>
    </Box>
  );
};
