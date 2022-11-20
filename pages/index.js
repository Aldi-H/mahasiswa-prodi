import {
  Box,
  Container,
  Table,
  TableContainer,
  Thead,
  useColorModeValue,
  Tbody,
  Td,
  Th,
  Tr,
  Button,
} from "@chakra-ui/react";

import Navbar from "../components/navbar";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext, useEffect, useState } from "react";
import backend from "../api/backend";
import { AuthContext } from "../utils/AuthContext";

export default function Home() {
  const [mahasiswas, setMahasiswas] = useState([]);
  const [user, setUser] = useState(null);
  const { token, setToken } = useContext(AuthContext);

  const getAllMahasiswa = async () => {
    try {
      const res = await backend.get('/mahasiswa');
      console.log(res.data.mahasiswa);
      setMahasiswas(res.data.mahasiswa);
    } catch (error) {
      console.log(error);
    }
  }

  const getUserByToken = async () => {
    try {
      const res = await backend.get('/mahasiswa/profile', {
        headers: {
          token,
          validateStatus: false,
        },
      })

      if (res.status !== 200) {
        alert(res.data.message);
        return;
      }

      return setUser(res.data.mahasiswa);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  }

  useEffect(() => {
    getAllMahasiswa();
    getUserByToken();
  }, [token])
  

  return (
    <Box
      justify="center"
      align="center"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
      pt={5}
      pb={10}
      px={10}
    >
      <Navbar user={user} handleLogout={handleLogout} />
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        boxShadow="lg"
      >
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>NIM</Th>
                <Th>Nama</Th>
                <Th>Angkatan</Th>
                <Th>Prodi</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mahasiswas && mahasiswas.map((mahasiswa, index) => (
                <Tr key={mahasiswa.nim}>
                  <Td>{index + 1}</Td>
                  <Td>{mahasiswa.nim}</Td>
                  <Td>{mahasiswa.nama}</Td>
                  <Td>{mahasiswa.angkatan}</Td>
                  <Td>{mahasiswa.prodi.nama}</Td>
                  <Td>
                    <Button size="sm" colorScheme="red">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
