'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import useClassStore from '@/store/classList';
import { Button, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function NewClassForm({ id, isEdit }) {
  const { register, handleSubmit, setValue, watch } = useForm();
  const router = useRouter();
  const classData = useClassStore((state) => state.classData);

  const editClassData = classData?.filter((val) => val?._id === id);

  const onSubmit = async (data) => {
    try {
      const saveClass = await axios.post(
        'http://localhost:3500/class/add-class',
        data,
      );
    } catch (error) {
      console.log('Failed to add new class');
    }
  };

  const updateClass = async (data) => {
    const id = editClassData[0]?._id;
    const postData = await axios.put(
      `http://localhost:3500/class/edit-class/${id}`,
      data,
    );
    console.log('postData :', postData);
    if (postData?.status === 200) {
      router.push('/class/allClasses');
    }
  };

  return (
    <>
      <h1 className="text-center">
        {!isEdit ? <span>Add Class</span> : <span>Update Class</span>}
      </h1>

      <Input
        type="text"
        label="Class Number"
        {...register('class')}
        defaultValue={isEdit ? editClassData[0]?.class : ''}
      />
      <Input
        type="text"
        label="Class Division"
        {...register('division')}
        defaultValue={isEdit ? editClassData[0]?.division : ''}
      />
      {!isEdit ? (
        <Button color="success" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      ) : (
        <Button color="success" onClick={handleSubmit(updateClass)}>
          Update
        </Button>
      )}
    </>
  );
}

export default NewClassForm;
