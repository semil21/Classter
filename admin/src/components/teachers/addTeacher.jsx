'use client';

import React, { useEffect, useState } from 'react';

import { Button, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';

import '../../styles/style.css';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';

import useClassStore from '@/store/classList';
import useStore from '@/store/teacherData';

function AddTeacher({ id, idEdit }) {
  console.log('--------- if :', id);
  const teacherData = useStore((state) => state.teacherData);
  const editData = teacherData?.filter((teacher) => teacher?._id === id);

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: teacherData,
  });
  const { classData, getClassData } = useClassStore();

  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState();
  const [allottedClass, setAllottedClass] = useState();

  const onSubmit = async (data) => {
    data.classAssigned = allottedClass?.value;
    data.gender = selectedGender;
    if (idEdit === true) {
      data.gender =
        selectedGender === undefined ? editData[0].gender : selectedGender;

      data.teacherId = editData[0]._id;
      const teacherId = editData[0]._id;

      const postEditData = await axios.put(
        `http://localhost:3500/teacher/edit-teacher/${teacherId}`,
        data,
      );

      if (postEditData?.status === 200) {
        updateTeacherToast();
        router.push('/employees/allTeachers');
      }
    } else {
      const submitData = await axios.post(
        'http://localhost:3500/teacher/add-teacher',
        data,
      );

      if (submitData?.status === 200) {
        saveTeacherToast();
      } else {
        failedTeacherToast();
      }
    }
  };

  const genderValue = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  const saveTeacherToast = () => toast.success('Teacher Added Succesfully.');
  const failedTeacherToast = () => toast.error('Failed to Add Teacher');
  const updateTeacherToast = () =>
    toast.info('Teacher Data Updated Successfully.');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    getClassData();
  }, []);
  console.log('classData :', classData);
  const options = classData.map((classItem) => ({
    value: classItem._id,
    label: `${classItem.class}-${classItem.division}`,
  }));

  return (
    <>
      <div>
        <ToastContainer autoClose={4000} position="top-center" />
      </div>
      <h1 className="text-center">Employee Form</h1>
      <p>{editData?.name}</p>
      <form className="flex justify-center ">
        <div className="w-full max-w-md flex flex-col gap-4 ">
          <Input
            type="text"
            label="First Name"
            variant="underlined"
            className="mb-4 form-style"
            {...register('firstName')}
            defaultValue={editData ? editData[0]?.firstName : ''}
          />

          <Input
            type="text"
            label="Last Name"
            variant="underlined"
            className="mb-4 form-style"
            {...register('lastName')}
            defaultValue={editData ? editData[0]?.lastName : ''}
          />

          {/* <Select options={genderValue} /> */}

          <Input
            type="date"
            {...register('birthDate')}
            label="Date of Birth"
            defaultValue={editData ? formatDate(editData[0]?.birthDate) : ''}
          />

          <div>
            <RadioGroup
              label="Select Gender"
              orientation="horizontal"
              className="mb-1 form-style"
              onValueChange={setSelectedGender}
            >
              <Radio
                value="Male"
                {...register('gender')}
                checked={editData && editData[0]?.gender === 'Male'}
              >
                Male
              </Radio>
              <Radio
                value="Female"
                {...register('gender')}
                checked={editData && editData[0]?.gender === 'Female'}
              >
                Female
              </Radio>
            </RadioGroup>
          </div>

          <Input
            type="email"
            label="Email"
            variant="underlined"
            className="mb-1 form-style"
            {...register('email')}
            defaultValue={editData ? editData[0]?.email : ''}
          />

          <Input
            type="number"
            label="Adhar Number"
            variant="underlined"
            className="mb-1 form-style"
            {...register('aadharNumber')}
            defaultValue={editData ? editData[0]?.aadharNumber : ''}
          />

          <Input
            type="text"
            label="Contact Number"
            variant="underlined"
            className="mb-1 form-style"
            {...register('contact')}
            defaultValue={editData ? editData[0]?.contact : ''}
          />

          <Input
            type="text"
            label="Alternate Contact Number"
            variant="underlined"
            className="mb-1 form-style"
            {...register('altenateContact')}
            defaultValue={editData ? editData[0]?.altenateContact : ''}
          />

          <Input
            type="text"
            label="Blood Group"
            variant="underlined"
            className="mb-1 form-style"
            {...register('bloodGroup')}
            defaultValue={editData ? editData[0]?.bloodGroup : ''}
          />

          <Input
            type="text"
            label="Any Disease"
            variant="underlined"
            className="mb-1 form-style"
            {...register('anyDisease')}
            defaultValue={editData ? editData[0]?.anyDisease : ''}
          />

          <Textarea
            label="Addresss"
            variant="underlined"
            className="mb-1 form-style"
            {...register('address')}
            defaultValue={editData ? editData[0]?.address : ''}
          />

          <Input
            type="text"
            label="Highest Education"
            variant="underlined"
            className="mb-1 form-style"
            {...register('education')}
            defaultValue={editData ? editData[0]?.education : ''}
          />

          <Input
            type="text"
            label="Experience"
            variant="underlined"
            className="mb-1 form-style"
            {...register('experience')}
            defaultValue={editData ? editData[0]?.experience : ''}
          />

          <Input
            type="date"
            {...register('joiningDate')}
            label="Joining Date"
            defaultValue={editData ? formatDate(editData[0]?.joiningDate) : ''}
          />

          <Input
            type="date"
            {...register('lastWorkingDay')}
            label="Last Working Date"
            defaultValue={
              editData ? formatDate(editData[0]?.lastWorkingDay) : ''
            }
          />

          <Input
            type="text"
            label="Monthly Salary"
            variant="underlined"
            className="mb-1 form-style"
            {...register('monthlySalary')}
            defaultValue={editData ? editData[0]?.monthlySalary : ''}
          />

          <Input
            type="text"
            label="Nationality"
            variant="underlined"
            className="mb-1 form-style"
            {...register('nationality')}
            defaultValue={editData ? editData[0]?.nationality : ''}
          />

          <Input
            type="text"
            label="Emergency Contact Name"
            variant="underlined"
            className="mb-1 form-style"
            {...register('emergencyName')}
            defaultValue={editData ? editData[0]?.emergencyName : ''}
          />

          <Input
            type="number"
            label="Emergency Contact Number"
            variant="underlined"
            className="mb-1 form-style"
            {...register('emergencyContact')}
            defaultValue={editData ? editData[0]?.emergencyContact : ''}
          />

          <Select
            options={options}
            {...register('classAssigned')}
            onChange={setAllottedClass}
          />

          <Button
            color="success"
            className="mb-1"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddTeacher;
