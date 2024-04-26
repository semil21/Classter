import axios from 'axios';
import create from 'zustand';

const useClassStore = create((set) => ({
  classData: [],
  getClassData: async () => {
    try {
      const getData = await axios.get('http://localhost:3500/class');
      console.log(getData?.data?.response);
      set((state: any) => ({ classData: getData?.data?.response }));
    } catch (error) {
      console.log('Error in fetching Classes');
    }
  },
}));

export default useClassStore;
