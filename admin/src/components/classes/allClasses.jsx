'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import useClassStore from '@/store/classList';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

function AllClasses() {
  const [classData, setClassData] = useState([]);
  const router = useRouter();

  const getClassData = async () => {
    try {
      const getData = await axios.get('http://localhost:3500/class');
      setClassData(getData?.data?.response);
    } catch (error) {
      console.log('Server error, failed to get class data ');
    }
  };

  useEffect(() => {
    getClassData();
  }, []);

  const handleDelete = async (id) => {
    const deleteRecord = await axios.delete(
      `http://localhost:3500/class/delete-class/${id}`,
    );
    setClassData((prevClasses) =>
      prevClasses.filter((classItem) => classItem._id !== id),
    );
  };

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>EDIT</TableColumn>
          <TableColumn>delete</TableColumn>
        </TableHeader>
        <TableBody>
          {classData?.map((val) => (
            <TableRow key={val?._id}>
              <TableCell>{val?.class}</TableCell>
              <TableCell>{val?.division}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  onClick={() => router.push(`/class/editClass/${val?._id}`)}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button color="danger" onClick={() => handleDelete(val?._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default AllClasses;
