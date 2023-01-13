import { Box, Divider, Heading, ListItem } from '@chakra-ui/react';

export const Section: React.FC<{
  id: string;
  title: string;
  children?: React.ReactNode;
}> = ({ id, title, children }) => {
  return (
    <ListItem id={id}>
      <Heading
        position='relative'
        mb={3}
        _before={{
          content: '""',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 1,
          height: '90%',
          borderRadius: 2,
          background: '#1d2737',
        }}
      >
        <Box ml={4}>{title}</Box>
      </Heading>
      {children}
    </ListItem>
  );
};
