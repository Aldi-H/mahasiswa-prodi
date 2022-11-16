import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  const [login, setLogin] = useState(false);

  return (
    <Box px={10}>
      <Flex my={5} h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h2" size="md">
          Mahasiswa Prodi
        </Heading>

        <Stack spacing={8} alignItems="center">
          <Heading as="h3" size="lg">
            Medium
          </Heading>
        </Stack>

        <Flex alignItems="center">
          <HStack spacing="3">
            {/* <Text fontSize="lg">Username</Text>
            <Menu>
              <MenuButton minW={0} rounded="full">
                <Avatar size="sm" />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    alert("log out");
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu> */}
            <Link href="./login">
              <Button>Login</Button>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
