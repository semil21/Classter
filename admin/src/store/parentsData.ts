import axios from 'axios';
import create from 'zustand';

const useParentStore = create((set) => ({
  parentsData: [],
  getParentsData: async (data: any) => {
    try {
      const parentsData = await axios.post(
        'http://localhost:3500/parent/search-parent',
        data,
      );
      set({ parentsData: parentsData?.data?.response[0] });
    } catch (error) {
      console.log('Error in Fetching Parents Data');
    }
  },
}));

export default useParentStore;
