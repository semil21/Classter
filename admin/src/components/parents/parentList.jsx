'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import useParentStore from '@/store/parentsData';
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function ParentList() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const parentsData = useParentStore((state) => state.parentsData);
  const getParentsData = useParentStore((state) => state.getParentsData);

  const handleSearch = async (data) => {
    getParentsData(data);
  };

  console.log('parentsData :', parentsData);
  console.log('parentsData length :', parentsData.length);

  if (parentsData.length > 0) {
    console.log('jackpot');
  }

  return (
    <>
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className=" p-5 border-b rounded-t text-center">
          <h3 className="text-xl font-semibold ">Search Parent Details</h3>
        </div>
        <div className="p-6 space-y-6 ">
          <form action="#">
            <div className="grid grid-cols-6 gap-6 ">
              <div className="col-span-6 sm:col-span-2 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student Class
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('class')}
                />
              </div>
              <div className="col-span-6 sm:col-span-2 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student Division
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('division')}
                />
              </div>
              <div className="col-span-6 sm:col-span-2 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student Name
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('name')}
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b flex justify-center">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
                onClick={handleSubmit(handleSearch)}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {parentsData.length === undefined ? (
          <div>
            <div className="  p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-center">
                STUDENT DETAILS
              </h3>
            </div>
            <Table isStriped aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>First Name</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.firstName}
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Last Name</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.lastName}
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.dateOfBirth}
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Gender</TableCell>
                  <TableCell>{parentsData?.student_details?.gender}</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Address</TableCell>
                  <TableCell>{parentsData?.student_details?.address}</TableCell>
                </TableRow>
                <TableRow key="6">
                  <TableCell>Aadhar Number</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.adhaarNumber}
                  </TableCell>
                </TableRow>
                <TableRow key="7">
                  <TableCell>ANY DISEASE</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.anyDisease}
                  </TableCell>
                </TableRow>
                <TableRow key="8">
                  <TableCell>BLOOD GROUP</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.bloodGroup}
                  </TableCell>
                </TableRow>

                <TableRow key="9">
                  <TableCell>BIRTH CERTI NO</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.brthCertiNum}
                  </TableCell>
                </TableRow>
                <TableRow key="10">
                  <TableCell>CLASS - DIVISION</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.class} : &nbsp;
                    {parentsData?.student_details?.division}
                  </TableCell>
                </TableRow>
                <TableRow key="11">
                  <TableCell>Aadhar Number</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.adhaarNumber}
                  </TableCell>
                </TableRow>
                <TableRow key="12">
                  <TableCell>PREVIOUS SCHOOL</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.previousSchool}
                  </TableCell>
                </TableRow>
                <TableRow key="13">
                  <TableCell>PREVIOUS SCHOOL ID</TableCell>
                  <TableCell>
                    {parentsData?.student_details?.previoudID}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className=" p-5 border-b rounded-t text-center">
              <h3 className="text-xl font-semibold text-center">
                FATHER DETAILS
              </h3>
            </div>
            <Table isStriped aria-label="Example static collection table">
              <TableHeader>
                <TableColumn> NAME</TableColumn>
                <TableColumn> CONTACT</TableColumn>
                <TableColumn> ALT CONTACT</TableColumn>
                <TableColumn> EDUCATION</TableColumn>
                <TableColumn> PROFESSION</TableColumn>
                <TableColumn> INCOME</TableColumn>
                <TableColumn> EDIT</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key={parentsData?._id}>
                  <TableCell>{parentsData?.fatherName}</TableCell>
                  <TableCell>{parentsData?.fatherContact}</TableCell>
                  <TableCell>{parentsData?.fatherAltContact}</TableCell>
                  <TableCell>{parentsData?.fatherEducation}</TableCell>
                  <TableCell>{parentsData?.fatherProfession}</TableCell>
                  <TableCell>{parentsData?.fatherIncome}</TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      onClick={() =>
                        router.push(`/parents/editParents/${parentsData?._id}`)
                      }
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className=" p-5 border-b rounded-t text-center">
              <h3 className="text-xl font-semibold text-center">
                MOTHER DETAILS
              </h3>
            </div>
            <Table isStriped aria-label="Example static collection table">
              <TableHeader>
                <TableColumn> NAME</TableColumn>
                <TableColumn> CONTACT</TableColumn>
                <TableColumn> ALT CONTACT</TableColumn>
                <TableColumn> EDUCATION</TableColumn>
                <TableColumn> PROFESSION</TableColumn>
                <TableColumn> INCOME</TableColumn>
                <TableColumn> EDIT</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key={parentsData?._id}>
                  <TableCell>{parentsData?.motherName}</TableCell>
                  <TableCell>{parentsData?.motherContact}</TableCell>
                  <TableCell>{parentsData?.motherAltContact}</TableCell>
                  <TableCell>{parentsData?.motherEducation}</TableCell>
                  <TableCell>{parentsData?.fatherProfession}</TableCell>
                  <TableCell>{parentsData?.motherIncome}</TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      onClick={() =>
                        router.push(`/parents/editParents/${parentsData?._id}`)
                      }
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default ParentList;
