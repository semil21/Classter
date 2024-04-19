import React from 'react';

import AddEmployee from '@/components/employees/addEmployee';
import EditEmployee from '@/components/employees/editEmployee';

// export const EditPage = async ({ params }) => {
//   const { id } = params;
//   console.log('1212', id);
// };

const page = async (ctx) => {
  const { params } = ctx;
  console.log('1212', params);
  return (
    <>
      <AddEmployee id={params.id} idEdit={true} />
    </>
  );
};

export default page;
