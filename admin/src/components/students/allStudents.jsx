'use client';

import React, { useEffect, useState } from 'react';

import useStudentStore from '@/store/studentData';
import { Button, Input, Textarea } from '@nextui-org/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function AllStudents() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [studentData, setStudentData] = useState();

  // const studentData = useStudentStore((state) => state.studentData);
  // console.log('studentData :', studentData);

  const { searchStudentsData } = useStudentStore;

  const handleSearch = async (data) => {
    console.log('data 1111 :', data);
    try {
      const filterStudent = await axios.post(
        'http://localhost:3500/student/filter-student',
        data,
      );

      if (filterStudent?.data?.response?.length === 0) {
        console.log('toastify jackpot for no student found');
      }
      setStudentData(filterStudent?.data?.response[0]);
    } catch (error) {
      console.log('Error in filtering Student');
    }
    // useStudentStore.getState().searchStudentsData(data);
    // searchStudentsData(data);
  };

  const updateStudent = async (data) => {
    delete data.classNumber;

    const id = studentData._id;

    const postUpdatedData = await axios.put(
      `http://localhost:3500/student/edit-student/${id}`,
      data,
    );
    if (postUpdatedData) {
      console.log('toastify record updated succesfully');
      setStudentData(null);
    }
  };

  return (
    <>
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t text-center">
          <h3 className="text-xl font-semibold ">Search Student Details</h3>
        </div>
        <div className="p-6 space-y-6 ">
          <form action="#">
            <div className="grid grid-cols-4 gap-6 ">
              <div className="col-span-1 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student Class
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('classNumber')}
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student Division
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('division')}
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student First Name
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('firstName')}
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Student Last Name
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('lastName')}
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b flex justify-center ">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-28"
                type="submit"
                onClick={handleSubmit(handleSearch)}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {studentData ? (
          <div className="p-6 space-y-6 flex flex-col	 items-center">
            {/* Example for FirstName */}
            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  First Name :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('firstName')}
                  defaultValue={studentData?.firstName}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Last Name :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('lastName')}
                  defaultValue={studentData?.lastName}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Email :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('email')}
                  defaultValue={studentData?.email}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Address :
                </label>
              </div>
              <div className="w-80">
                <Textarea
                  type="text"
                  minRows={4}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('address')}
                  defaultValue={studentData?.address}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Birth Date :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="date"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('dateOfBirth')}
                  defaultValue={studentData?.dateOfBirth}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Blood Group :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('bloodGroup')}
                  defaultValue={studentData?.bloodGroup}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Gender :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('gender')}
                  defaultValue={studentData?.gender}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Aadhar Number :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('adhaarNumber')}
                  defaultValue={studentData?.adhaarNumber}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Birth Certificate Number :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('brthCertiNum')}
                  defaultValue={studentData?.brthCertiNum}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Class :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('class')}
                  defaultValue={studentData?.class}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Division :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('division')}
                  defaultValue={studentData?.division}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Any Disease :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('anyDisease')}
                  defaultValue={studentData?.anyDisease}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Previous School :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('previousSchool')}
                  defaultValue={studentData?.previousSchool}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Previus School ID :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('previoudID')}
                  defaultValue={studentData?.previoudID}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-52  flex items-center ">
                <label className="text-base font-medium text-gray-900 block	">
                  Any Notes :
                </label>
              </div>
              <div className="w-80">
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('anyNotes')}
                  defaultValue={studentData?.anyNotes}
                />
              </div>
            </div>

            <div className="flex justify-center py-4">
              <Button color="secondary" onClick={handleSubmit(updateStudent)}>
                Update Student
              </Button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default AllStudents;
