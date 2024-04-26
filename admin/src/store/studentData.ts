import axios from 'axios';
import { create } from 'zustand';

const useStudentStore = create((set) => ({
  studentData: [],
  searchStudentsData: async (data: any) => {
    console.log('data 22222 :', data);
    try {
      const filterStudent = await axios.post(
        'http://localhost:3500/student/filter-student',
        data,
      );

      if (filterStudent?.data?.response?.length === 0) {
        console.log('toastify jackpot for no student found');
      }

      set({ studentData: filterStudent?.data?.response[0] });
    } catch (error) {
      console.log('Error in filtering Student');
    }
  },
}));

export default useStudentStore;
