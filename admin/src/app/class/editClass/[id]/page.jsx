import React from 'react';

import NewClassForm from '@/components/classes/newClassForm';

function page(ctx) {
  const { params } = ctx;
  console.log('12 :', params);
  return (
    <>
      <NewClassForm isEdit={true} id={params.id} />
    </>
  );
}

export default page;
