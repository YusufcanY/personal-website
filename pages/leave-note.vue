<template>
  <div class="container flex items-center min-h-screen mx-auto">
    <div class="grid w-full grid-cols-12 gap-x-16">
      <div class="col-span-8">
        <input v-model="note" class="w-full px-2 py-2 font-black text-white transition-all duration-200 bg-gray-800 rounded-md outline-none hover:shadow-lg focus:ring ring-gray-600 ring-offset-foreground ring-offset-4" placeholder="Let's get have fun" type="text">
      </div>
      <div class="col-span-4">
        <button class="w-full py-2 font-black text-white transition-all duration-200 transform bg-gray-800 rounded-md focus:bg-opacity-75 hover:-translate-y-1 hover:shadow-lg" @click="showRecaptcha = true">
          Leave Note
        </button>
      </div>
      <div v-if="showRecaptcha" class="col-span-12">
        <recaptcha
          @error="onRecaptchaError"
          @success="postNote()"
          @expired="onRecaptchaExpired"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      showRecaptcha: false,
      db: null,
      note: null,
    };
  },
  mounted() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCvcABL2a8UHaodjyOHMhN0I6MW0PxiZhU',
      authDomain: 'yusufcan-yilmaz-com.firebaseapp.com',
      projectId: 'yusufcan-yilmaz-com',
      storageBucket: 'yusufcan-yilmaz-com.appspot.com',
      messagingSenderId: '427713746573',
      appId: '1:427713746573:web:d0cf18d9eda825715ef4c4',
    };

    initializeApp(firebaseConfig);
    this.db = getFirestore();
  },
  methods: {
    onRecaptchaError() {
      console.error('Recaptcha error');
    },
    onRecaptchaExpired() {
      console.error('Recaptcha expired');
    },
    async postNote() {
      try {
        const docRef = await addDoc(collection(this.db, 'notes'), {
          content: this.note,
        });
        this.showRecaptcha = false;
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    },
  },
};
</script>

<style>

</style>
