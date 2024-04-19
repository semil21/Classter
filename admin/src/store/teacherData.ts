import create from 'zustand';

interface Teacher {
  _id: string;
  name: string;
  contact: string;
  email: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  education: string;
  bloodGroup: string;
  nationality: string;
  emergencyName: string;
  emergencyRelation: string;
  emergencyContact: string;
  role: string;
  experience: string;
  joiningDate: string;
  monthlySalary: string;
}

interface StoreState {
  teacherData: Teacher[];
  setTeacherData: (data: Teacher[]) => void;
  addTeacher: (teacher: Teacher) => void;
  removeTeacher: (id: string) => void;
}

const useStore = create<StoreState>((set) => ({
  teacherData: [],
  setTeacherData: (data) => set({ teacherData: data }),
  addTeacher: (teacher) =>
    set((state) => ({ teacherData: [...state.teacherData, teacher] })),
  removeTeacher: (id) =>
    set((state) => ({
      teacherData: state.teacherData.filter((teacher) => teacher._id !== id),
    })),
}));

export default useStore;
