import React from 'react';

import AddEmployee from '@/components/teachers/addTeacher';

// export const EditPage = async ({ params }) => {
//   const { id } = params;
//   console.log('1212', id);
// };

const page = async (ctx) => {
  const { params } = ctx;
  return (
    <>
      <AddEmployee id={params.id} idEdit={true} />
    </>
  );
};

export default page;
