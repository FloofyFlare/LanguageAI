<template>
    <body class="bg-base-100">
      <main>
        <section v-if="!verify" class="bg-base-100 w-full flex items-center justify-center">
          <form
            class="flex flex-col w-full justify-center pb-48 pt-12 max-w-xs"
            @submit.prevent="handleSubmit"
          >
            <div class="form-control w-full">
              <p
                class="text-primary leading-loose tracking-widest text-3xl md:text-5xl p-4 pt-0 font-semibold"
              >
                Sign up for a <span class="text-secondary">Student Account</span>
              </p>
              <span v-show="badNames" class="text-error pt-8"
                >Please provide a first and last name</span
              >
              <label class="label">
                <span class="label-text text-primary"
                  >*First Name?</span
                >
              </label>
              <input
                v-model="firstName"
                type="text"
                placeholder="John"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
  
            <div class="form-control mt-12 w-full max-w-xs">
              <label class="label text-center">
                <span class="label-text text-primary text-center"
                  >*Last Name</span
                >
              </label>
              <input
                v-model="lastName"
                type="text"
                placeholder="Doe"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
  
            <div class="form-control mt-12 w-full max-w-xs">
              <span v-show="badInputEmailWrong" class="text-error pt-8"
                >Please check your Input</span
              >
              <span v-show="badInputEmail" class="text-error pt-8"
                >Please check your Input</span
              >
              <label class="label text-center">
                <span class="label-text text-primary text-center"
                  >*Email address</span
                >
              </label>
              <input
                v-model="email"
                type="email"
                placeholder="example@gmail.com"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
  
            <div class="form-control mt-12 w-full max-w-xs">
              <span v-show="badclasscode" class="text-error pt-8"
                >This class code does not exist</span
              >
              <label class="label">
                <span class="label-text text-primary">*Class code</span>
              </label>
              <input
                v-model="classcode"
                type="text"
                placeholder="12345"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
  
            <div class="form-control mt-12 w-full max-w-xs"></div>
            <span v-show="badInputPass" class="text-error pt-8"
              >Please follow password guidlines</span
            >
            <label class="label">
              <span class="label-text text-primary">*password?</span>
            </label>
            <input
              v-model="password"
              type="password"
              placeholder="pass"
              class="input input-bordered w-full max-w-xs"
            />
            <span class="text-info pt-8">Passwords need to be:</span>
            <ul>
              <li><span class="text-info">- 8+ characters</span></li>
              <li>
                <span class="text-info"
                  >- Has upper and lower case letters</span
                >
              </li>
              <li><span class="text-info">- Has a number</span></li>
              <li><span class="text-info">- Has a special character</span></li>
            </ul>
  
            <div class="form-control mt-12 mb-12 w-full max-w-xs">
              <label class="label">
                <span class="label-text text-primary">*repeat password</span>
              </label>
              <input
                v-model="password2"
                type="password"
                placeholder="pass"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <button class="btn btn-primary w-full max-w-xs text-neutral">Sign up</button>
            </form>
          </section>
          <section v-if="verify" class="bg-base-100 w-full flex items-center justify-center">
            <div class="w-screen h-screen flex flex-col items-center justify-center">
              <div class="card w-96 md:w-1/3 bg-base-100 shadow-xl">
                <div class="card-body">
                  <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  
                  <h2 class="card-title md:text-3xl">Verify your email!</h2>
                  <p class="text-base md:text-xl">We sent a verification link to your email address. Please check your email and follow the instructions to activate your account.</p>
                  <p class="text-base md:text-xl">If you didn't receive an email, you can <a @click="resendEmailConfirm" class="link link-primary">request another one</a>.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
    </body>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue'
    const supabase = useSupabaseClient()
    const usercheck = supabase.auth.getUser()

    const userId = ref<string>('');
    //getting user ID
    const verify = ref(false);
    const password = ref('')
    const password2 = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const classcode = ref('')
    const badInputPass = ref(false)
    const badInputEmail = ref(false)
    const badInputEmailWrong = ref(false)
    const badclasscode = ref(false)
    const badNames = ref(false)
    supabase.auth.getUser();

    TeacherInput()
    async function pullUserData() {
    const { data, error } = await usercheck;
    if (error) {
        console.log(error);
    } else {
        userId.value = data.user.id;
    }
    }


    async function TeacherInput() {
    await pullUserData();
    if (userId.value !== '') {
        const { data, error } = await supabase
            .from('Classrooms')
            .select('classcode, difficulty, wordbank, time, classtopic')
            .eq('teacher', "" + userId.value) 
        console.log(data)

        if (data && data.length > 0) {
            navigateTo('/teacher_overview');
        } else {
            navigateTo('/student_dashboard');
        }
    }
    }

    async function resendEmailConfirm() {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email.value,
        options: {
          emailRedirectTo: 'https://yuuera.com/login'
        }
      })
    }

    function handleSubmit() {
        if (!validateEmail(email.value)) {
        badInputEmailWrong.value = true
            return;
        } else {
        badInputEmailWrong.value = false;
        }
        if (firstName.value === '' || lastName.value === '') {
            badNames.value = true;
            return;
        } else {
            badNames.value = false;
        }
        if (!validatePassword(password.value, password2.value)) {
            return;
        }
        if (!validateClassCode(classcode.value)) {
            return;
        }
        handleSend()
    }

    async function handleSend() {
        const userId = ref("");
        console.log(password, password2, firstName, lastName, email, classcode);
        {
            const { data, error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
            })
            userId.value = data.user.id;
            console.log(userId);
        }
        TeacherInput();
        {
            const { data, error } = await supabase
            .from('UserData')
            .insert([
                { User: userId.value, teacher: false, name: firstName.value + " " + lastName.value, classcode: classcode.value, dayscomplete: " ", uniquewords: 0 },
            ])
            .select()
        }
        verify.value = true;
          
    }


    function validatePassword(password, password2) {
    // Define validation criteria
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)

    // Check if all criteria are met
    const isValid =
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    password === password2

    if (!isValid) {
    badInputPass.value = true
    } else {
    badInputPass.value = false
    }
    return isValid
    }

    async function validateClassCode(code : string) {
    const { data, error } = await supabase
      .from('Classrooms')
      .select('classcode, difficulty, wordbank, time, classtopic')
      .eq('classcode', code) 
    
    if (data && data.length > 0) {
        badclasscode.value = false
        return false;
    } else {
        badclasscode.value = true
        return true;
    }
    }


    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    function validatePhoneNumber(phoneNumber) {
    // Remove any non-digit characters
    const cleanedNumber = phoneNumber.replace(/\D/g, '')

    // Check if the cleaned number is 10 digits long
    if (cleanedNumber.length === 10) {
    // It's a valid 10-digit phone number
    badInputPhone.value = false
    return true
    } else {
    // It's not a valid phone number
    badInputPhone.value = true
    return false
    }
    }
    
</script>