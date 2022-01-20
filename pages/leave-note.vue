<template>
  <div class="container flex items-center min-h-screen mx-auto">
    <div class="grid w-full grid-cols-12 gap-x-16">
      <div class="col-span-8">
        <input v-model="note" class="w-full px-2 py-2 font-black text-white transition-all duration-200 bg-gray-800 rounded-md outline-none hover:shadow-lg focus:ring ring-gray-600 ring-offset-foreground ring-offset-4" placeholder="Let's get have fun" type="text">
      </div>
      <div class="col-span-4">
        <button :class="[alerts[0] ? alerts[0].color : 'bg-gray-800' ]" class="w-full py-2 font-black text-white transition-all duration-200 transform rounded-md focus:bg-opacity-75 hover:-translate-y-1 hover:shadow-lg" @click="handleNote()">
          {{ alerts[0] ? alerts[0].message : 'Leave Note' }}
        </button>
      </div>
      <div v-if="showRecaptcha" class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-75 bg-foreground">
        <recaptcha
          v-click-outside="toggleRecaptcha"
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
import vClickOutside from 'v-click-outside';

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      showRecaptcha: false,
      alerts: [],
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
    toggleRecaptcha() {
      this.showRecaptcha = !this.showRecaptcha;
    },
    handleNote() {
      if (this.note && this.note.length > 0) {
        if (this.alerts[0]) {
          this.alerts = [];
        }
        this.showRecaptcha = true;
      } else {
        this.alerts.push({
          color: 'bg-red-400',
          message: 'Fill the note field',
        });
      }
    },
    onRecaptchaError() {
      this.alerts.push({
        color: 'bg-red-400',
        message: 'Recaptcha error',
      });
    },
    onRecaptchaExpired() {
      this.alerts.push({
        color: 'bg-red-400',
        message: 'Recaptcha expired',
      });
    },
    async postNote() {
      try {
        await addDoc(collection(this.db, 'notes'), {
          content: this.note,
        });
        this.showRecaptcha = false;
        this.alerts[0].push({
          color: 'bg-green-400',
          message: 'Note sent successfully',
        });
      } catch (e) {
        this.alerts[0].push({
          color: 'bg-green-400',
          message: `Error adding document: ${e}`,
        });
      }
    },
  },
};
</script>

<style>

</style>
