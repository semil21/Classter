import axios from 'axios';
import { create } from 'zustand';

const useFeeStructure = create((set) => ({
  feeStructureData: [],
  searchedData: [],

  postFeeStructure: async (data: any) => {
    try {
      const postData = await axios.post(
        'http://localhost:3500/feeStructure/add-fees',
        data,
      );
      set((state: any) => ({
        feeStructureData: [
          ...state.feeStructureData,
          postData?.data?.response[0],
        ],
      }));
    } catch (error) {
      console.log('Failed to Save Fee Structure');
    }
  },

  searchFeeStructure: async (className: any) => {
    try {
      const getData = await axios.post(
        'http://localhost:3500/feeStructure/search-fees',
        { className },
      );
      console.log('getData 2222 :', getData?.data?.response);
      set({ searchedData: getData?.data?.response });
    } catch (error) {
      console.log('Error in Searching Class');
    }
  },
}));

export default useFeeStructure;
