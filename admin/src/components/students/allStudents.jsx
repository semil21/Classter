'use client';

import React, { useEffect, useState } from 'react';

import {
  Button,
  getKeyValue,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import axios from 'axios';

function AllStudents() {
  const [studentData, setStudentData] = useState([]);

  const getStudentsData = async () => {
    try {
      const getData = await axios.get('http://localhost:3500/student');
      console.log(getData?.data?.response);
      setStudentData(getData?.data?.response);
    } catch (error) {
      console.log('Error in getting user data');
    }
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  return (
    <>
      <Table aria-label="Example table with client side pagination">
        <TableHeader>
          <TableColumn key="name">FIRSTNAME</TableColumn>
          <TableColumn key="role">LASTNAME</TableColumn>
          <TableColumn key="status">GENDER</TableColumn>
          <TableColumn key="status">ADDRESS</TableColumn>
          <TableColumn key="status">BRTH DATE</TableColumn>
          <TableColumn key="status">AADHAR NUMBER</TableColumn>
          <TableColumn key="status">BIRTH CERTIFICATE NUM</TableColumn>
          <TableColumn key="status">PREVIOUS SCHOOL</TableColumn>
          <TableColumn key="status">PREVIOUS SCHOOOL ID</TableColumn>
          <TableColumn key="status">BLOOD GROUP</TableColumn>
          <TableColumn key="status">ANY DISEASE</TableColumn>
          <TableColumn key="status">NOTES</TableColumn>
          <TableColumn key="status">EDIT</TableColumn>
        </TableHeader>
        <TableBody>
          {studentData?.map((val) => (
            <TableRow>
              <TableCell>{val?.firstName}</TableCell>
              <TableCell>{val?.lastName}</TableCell>
              <TableCell>{val?.gender}</TableCell>
              <TableCell>{val?.address}</TableCell>
              <TableCell>{val?.dateOfBirth}</TableCell>
              <TableCell>{val?.adhaarNumber}</TableCell>
              <TableCell>{val?.brthCertiNum}</TableCell>
              <TableCell>{val?.previousSchool}</TableCell>
              <TableCell>{val?.previoudID}</TableCell>
              <TableCell>{val?.bloodGroup}</TableCell>
              <TableCell>{val?.anyDisease}</TableCell>
              <TableCell>{val?.anyNotes}</TableCell>
              <TableCell>
                <Button color="primary">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default AllStudents;
