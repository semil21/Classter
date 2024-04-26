'use client';

import React, { useEffect, useState } from 'react';

import { Input, Textarea } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import useFeeStructure from '../../store/feeStructure';

function AddFeeStructure({ isEdit }) {
  const { register, handleSubmit, setValue, watch } = useForm();

  const {
    postFeeStructure,
    feeStructureData,
    searchFeeStructure,
    searchedData,
  } = useFeeStructure();

  const onSubmit = async (data) => {
    await postFeeStructure(data);
  };

  const handleSearch = async (data) => {
    await searchFeeStructure(data.className);
  };

  console.log('searchedData 1111', searchedData);

  useEffect(() => {
    console.log('===============');
  }, [searchedData]);

  return (
    <>
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="p-6 space-y-6  ">
          <form action="">
            <div className="grid grid-cols-6 gap-6  ">
              <div className="col-span-6 sm:col-span-2 flex flex-col ">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Class Name
                </label>
                <Input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
                  {...register('className')}
                />
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b ">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                  onClick={handleSubmit(handleSearch)}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <p>{}</p>
        </div>
        <div className=" p-5 border-b rounded-t text-center">
          <h3 className="text-xl font-semibold ">
            {' '}
            {isEdit === true ? 'Update Fee Structure' : 'Add Fee Structure'}
          </h3>
        </div>
        <p>{searchedData[0]?.booksFee}</p>

        {searchedData?.length > 0 && (
          <div className="p-6 space-y-6">
            <form action="#">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Class
                  </label>
                  <Input
                    defaultValue={Number(searchedData[0]?.booksFee || 0)}
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('class')}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Registration Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full"
                    {...register('registrationFee')}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Quaterly Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('quaterlyAmount')}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Yearly Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('yearlyAmount')}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Books Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('booksFee')}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Lab Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('labFee')}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Transportation Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('transportFee')}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Extra Activities Fee
                  </label>
                  <Input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full "
                    {...register('activityFee')}
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        <div className="p-6 border-t border-gray-200 rounded-b flex justify-center">
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

export default AddFeeStructure;
