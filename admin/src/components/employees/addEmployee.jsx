'use client';

import React, { useEffect, useState } from 'react';

import {
  Button,
  ButtonGroup,
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from '@nextui-org/react';

import '../../styles/style.css';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';

import useStore from '@/store/teacherData';

function AddEmployee({ id, idEdit }) {
  const teacherData = useStore((state) => state.teacherData);
  const editData = teacherData?.filter((teacher) => teacher?._id === id);

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: teacherData,
  });

  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState();

  const onSubmit = async (data) => {
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
        router.push('/employees/allEmployees');
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
            label="Full Name"
            variant="underlined"
            className="mb-4 form-style"
            {...register('name')}
            defaultValue={editData ? editData[0]?.name : ''}
          />

          <Input
            type="number"
            label="Contact Number"
            variant="underlined"
            className="mb-1 form-style"
            {...register('contact')}
            defaultValue={editData ? editData[0]?.contact : ''}
          />

          <Input
            type="email"
            label="Email"
            variant="underlined"
            className="mb-1 form-style"
            {...register('email')}
            defaultValue={editData ? editData[0]?.email : ''}
          />
          <Textarea
            label="Addresss"
            variant="underlined"
            className="mb-1 form-style"
            {...register('address')}
            defaultValue={editData ? editData[0]?.address : ''}
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
            type="date"
            {...register('dateOfBirth')}
            label="Date of Birth"
            defaultValue={editData ? formatDate(editData[0]?.dateOfBirth) : ''}
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
            label="Blood Group"
            variant="underlined"
            className="mb-1 form-style"
            {...register('bloodGroup')}
            defaultValue={editData ? editData[0]?.bloodGroup : ''}
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
            type="text"
            label="Relation with Contact Name"
            variant="underlined"
            className="mb-1 form-style"
            {...register('emergencyRelation')}
            defaultValue={editData ? editData[0]?.emergencyRelation : ''}
          />
          <Input
            type="number"
            label="Emergency Contact Number"
            variant="underlined"
            className="mb-1 form-style"
            {...register('emergencyContact')}
            defaultValue={editData ? editData[0]?.emergencyContact : ''}
          />
          <Input
            type="text"
            label="Role"
            placeholder="principal | management | teacher  | accountant | other"
            variant="underlined"
            className="mb-1 form-style"
            {...register('role')}
            defaultValue={editData ? editData[0]?.role : ''}
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
            label="Date of Birth"
            defaultValue={editData ? formatDate(editData[0]?.joiningDate) : ''}
          />
          <Input
            type="text"
            label="Monthly Salary"
            variant="underlined"
            className="mb-1 form-style"
            {...register('monthlySalary')}
            defaultValue={editData ? editData[0]?.monthlySalary : ''}
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

export default AddEmployee;
