'use client';

import React, { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
} from '@nextui-org/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import useParentStore from '../../store/parentsData';

function ParentsForm({ parentID, isEdit }) {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [className, setClassName] = useState('');
  const [division, setDivision] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [id, setId] = useState('');

  const getParentsData = useParentStore((state) => state.parentsData);

  const handleClassChange = (e) => {
    setClassName(e.target.value);
    // searchStudent();
  };

  const handleSectionChange = (e) => {
    setDivision(e.target.value);
    // searchStudent();
  };

  useEffect(() => {
    searchStudent();
  }, [setClassName, division]);

  const searchStudent = async () => {
    try {
      const searchStudentData = await axios.post(
        'http://localhost:3500/student/search-student',
        { className, division },
      );
      setSearchedData(searchStudentData?.data?.response);
    } catch (error) {
      console.error('Error searching student:');
    }
  };

  const onSubmit = async (data) => {
    data.student = id;
    const parentId = getParentsData._id;
    if (isEdit) {
      data.student = id ? id : getParentsData.student_details._id;
      const updateParent = axios.put(
        `http://localhost:3500/parent/edit-parent/${parentId}`,
        data,
      );
    } else {
      const saveParentData = await axios.post(
        'http://localhost:3500/parent/add-parent',
        { data },
      );
      console.log('saveParentData :', saveParentData);
    }
  };

  return (
    <>
      <p className="p-2 text-center">
        <b>Add Student</b>
      </p>
      <div className="grid grid-cols-6 gap-6 py-6">
        <div className="col-span-6 sm:col-span-3">
          <label className="text-sm font-medium text-gray-900 block mb-2">
            Student Class
          </label>
          <Input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
            onChange={handleClassChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="text-sm font-medium text-gray-900 block mb-2">
            Student Section
          </label>
          <Input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
            onChange={handleSectionChange}
          />
        </div>
      </div>

      <Accordion>
        <AccordionItem aria-label="Accordion 1" title="Student Details">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>BIRTH DATE</TableColumn>
              <TableColumn>CLASS </TableColumn>
              <TableColumn> DIVISION</TableColumn>
              <TableColumn>ADD</TableColumn>
            </TableHeader>

            {searchedData.length ? (
              <TableBody>
                {searchedData?.map((val) => (
                  <TableRow key={val?._id}>
                    <TableCell>
                      {val?.firstName} &nbsp;{val?.lastName}
                    </TableCell>
                    <TableCell>{val?.dateOfBirth}</TableCell>
                    <TableCell>{val?.class}</TableCell>
                    <TableCell>{val?.division}</TableCell>
                    <TableCell>
                      <Button color="success" onClick={() => setId(val?._id)}>
                        ADD
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow key={getParentsData?._id}>
                  <TableCell>
                    {getParentsData?.student_details?.firstName} &nbsp;
                    {getParentsData?.lastName}
                  </TableCell>
                  <TableCell>
                    {getParentsData?.student_details?.dateOfBirth}
                  </TableCell>
                  <TableCell>
                    {getParentsData?.student_details?.class}
                  </TableCell>
                  <TableCell>
                    {getParentsData?.student_details?.division}
                  </TableCell>
                  <TableCell>
                    <Button color="success" onClick={() => setId(val?._id)}>
                      ADD
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </AccordionItem>
      </Accordion>
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t text-center">
          <h3 className="text-xl font-semibold ">Add Parent Details</h3>
        </div>

        <div className="p-6 space-y-6 ">
          <form action="#">
            <p className="p-2 text-center">
              <b>Father Details</b>
            </p>
            <div className="grid grid-cols-6 gap-6 py-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Father Name
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                  {...register('fatherName')}
                  defaultValue={isEdit ? getParentsData?.fatherName : ''}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Father Education
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('fatherEducation')}
                  defaultValue={isEdit ? getParentsData?.fatherEducation : ''}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Father Contact Number
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('fatherContact')}
                  defaultValue={isEdit ? getParentsData?.fatherContact : ''}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Father Alternate Contact Number
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('fatherAltContact')}
                  defaultValue={isEdit ? getParentsData?.fatherAltContact : ''}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Father Profession
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('fatherProfession')}
                  defaultValue={isEdit ? getParentsData?.fatherProfession : ''}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Father Income
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('fatherIncome')}
                  defaultValue={isEdit ? getParentsData?.fatherIncome : ''}
                />
              </div>
            </div>

            <p className="p-2 text-center py-8">
              <b>Mother Details</b>
            </p>
            <div className="grid grid-cols-6 gap-6 py-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Mother Name
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                  {...register('motherName')}
                  defaultValue={isEdit ? getParentsData?.motherName : ''}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Mother Education
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('motherEducation')}
                  defaultValue={isEdit ? getParentsData?.motherEducation : ''}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Mother Contact Number
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('motherContact')}
                  defaultValue={isEdit ? getParentsData?.motherContact : ''}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Mother Alternate Contact Number
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('motherAltContact')}
                  defaultValue={isEdit ? getParentsData?.motherAltContact : ''}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Mother Profession
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('motherProfession')}
                  defaultValue={isEdit ? getParentsData?.motherProfession : ''}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Mother Income
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                  {...register('motherIncome')}
                  defaultValue={isEdit ? getParentsData?.motherIncome : ''}
                />
              </div>
            </div>
          </form>
        </div>
        {/* {isEdit ? (
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
              onClick={() => handleSubmit(onSubmit)}
            >
              Update
            </button>
          </div>
        ) : (
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
              onClick={() => handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        )} */}

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ParentsForm;
