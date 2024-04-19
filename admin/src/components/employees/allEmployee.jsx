'use client';

import React, { useEffect, useState } from 'react';

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

import '../../styles/style.css';

import { useRouter } from 'next/navigation';

import useStore from '@/store/teacherData';
import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AllEmployee() {
  const router = useRouter();

  const setTeacherData = useStore((state) => state.setTeacherData);
  const removeTeacher = useStore((state) => state.removeTeacher);
  const teacherData = useStore((state) => state.teacherData);

  const getTeachersData = async () => {
    try {
      const getData = await axios.get('http://localhost:3500/teacher');
      setTeacherData(getData?.data?.response);
    } catch (error) {
      console.log('Error in getting Teachers Data');
    }
  };

  useEffect(() => {
    getTeachersData();
  }, []);

  const handleDelete = async (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this record?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const deleteData = await axios.delete(
                'http://localhost:3500/teacher/delete-teacher',
                { data: { teacherId: id } },
              );
              console.log('deleteData :', deleteData);
              if (deleteData.status === 200) {
                removeTeacher(id);
                deleteTeacherRecord();
              }
            } catch (error) {
              console.log('error :', error);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const deleteTeacherRecord = () => toast.error('Record Deleted Succcessfully');
  return (
    <>
      <div>
        <ToastContainer autoClose={4000} position="top-center" />
      </div>
      <Table
        isStriped
        aria-label="Example static collection table employee-table"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>CONTACT</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn width={450}>ADDRESS</TableColumn>
          <TableColumn>GENDER</TableColumn>
          <TableColumn>DOB</TableColumn>
          <TableColumn>EDUCATION</TableColumn>
          <TableColumn>BLOOD GROUP</TableColumn>
          <TableColumn>NATIONALITY</TableColumn>
          <TableColumn>EMERGENCY CONTACT NAME</TableColumn>
          <TableColumn>EMERGENCE CONTACT RELATION</TableColumn>
          <TableColumn>EMERGENCE CONTACT NUMBER</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>EXPERIENCE</TableColumn>
          <TableColumn>JOINING DATE</TableColumn>
          <TableColumn>SALARY</TableColumn>
          <TableColumn>EDIT</TableColumn>
          <TableColumn>DELETE</TableColumn>
        </TableHeader>

        <TableBody>
          {teacherData?.map((val) => (
            <TableRow key={val?._id}>
              <TableCell>{val?.name}</TableCell>
              <TableCell> {val?.contact} </TableCell>
              <TableCell> {val?.email}</TableCell>
              <TableCell> {val?.address}</TableCell>
              <TableCell> {val?.gender}</TableCell>
              <TableCell> {val?.dateOfBirth.trim(0.9)}</TableCell>
              <TableCell> {val?.education}</TableCell>
              <TableCell> {val?.bloodGroup}</TableCell>
              <TableCell> {val?.nationality}</TableCell>
              <TableCell> {val?.emergencyName}</TableCell>
              <TableCell> {val?.emergencyRelation}</TableCell>
              <TableCell> {val?.emergencyContact}</TableCell>
              <TableCell> {val?.role}</TableCell>
              <TableCell> {val?.experience}</TableCell>
              <TableCell> {val?.joiningDate}</TableCell>
              <TableCell> {val?.monthlySalary}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  onClick={() =>
                    router.push(`/employees/editEmployee/${val?._id}`)
                  }
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

export default AllEmployee;
