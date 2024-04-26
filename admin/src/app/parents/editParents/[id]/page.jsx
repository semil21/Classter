import React from 'react';

import ParentsForm from '../../../../components/parents/parentsForm';

const page = (ctx) => {
  const { params } = ctx;
  console.log('----', params.id);
  return (
    <>
      <div>edit parents page</div>
      <ParentsForm isEdit={true} parentID={params.id} />
    </>
  );
};

export default page;
