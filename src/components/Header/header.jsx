import { Box, Flex, Image } from '@chakra-ui/react';
import Menu from '../menu/menu';
import Logo from './Logo.jpg';

function Header() {
  return (
    <Box bg="#D6C4C0" p={5} color="rgb(54,53,55)">
      <Flex
        direction={['column', 'row']}
        align="center"
        justify={['center', 'flex-start']}
      >
        <Image src={Logo} alt='' boxSize={['200px', '250px']} maxW="100%" />
        <Menu />
      </Flex>
    </Box>
  );
}

export default Header;
