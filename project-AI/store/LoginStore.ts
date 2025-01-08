import { defineStore } from 'pinia'

interface UserState {
  //User's Classroom
  topics: boolean[] 
  classCode: string 
  time: number 
  difficulty: number 
  wordBank: string 

  //User Info
  username: string 
  wordCount: number 
  daysComplete: string 
  teacher: boolean
  userId: string

  //student activity
  chosenTopic: number
}
interface UserData {
  User: string;
  classcode: string;
  dayscomplete: string;
  name: string;
  teacher: boolean;
  uniquewords: number;
}

interface ClassroomData {
  topics: boolean[];
  classcode: string;
  time: number;
  difficulty: number;
  wordbank: string;
}
export const useUserStore = defineStore('user-store', {
  state: (): UserState => ({
    //User's Classroom
    topics: [],
    classCode: "",
    time: 0,
    difficulty: 0,
    wordBank: "",
    chosenTopic: 0,
    //User Info
    username: "",
    wordCount: 0,
    daysComplete: "",
    teacher: false,
    userId: "",
  }),
  actions: {
    async setUser() {
      const supabase = useSupabaseClient();
      const user = supabase.auth.getUser();
      //getting user ID
      {
        const { data, error } = await user;
        if (error) {
          navigateTo('/login');
          return;
        } else {
          this.userId = data.user.id;
        }
      }
      {
        //Getting User Data
        const { data, error }: { data: UserData[] | null, error: any } = await supabase
        .from('UserData')
        .select('User, classcode, dayscomplete, name, teacher, uniquewords')
        .eq('User', this.userId)
        
        if (data && data.length > 0) {
          this.username = data[0].name;
          this.wordCount = data[0].uniquewords;
          this.daysComplete = data[0].dayscomplete;
          this.classCode = data[0].classcode;
          this.teacher = data[0].teacher;
        }
      }
      {
        const { data, error }: { data: ClassroomData[] | null, error: any } = await supabase
        .from('Classrooms')
        .select('classcode, difficulty, wordbank, time, topics')
        .eq('classcode', "" + this.classCode) 

        if (data && data.length > 0) {
          this.time = data[0].time;
          this.difficulty = data[0].difficulty;
          this.wordBank = data[0].wordbank;
          this.topics = data[0].topics;
        }
      }   
    },
    chooseTopic(topic: number) {
      this.chosenTopic = topic;
    },
  },
})
