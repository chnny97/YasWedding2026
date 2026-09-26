

    // Import Firebase modules
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

    // Your Firebase config (replace with your values)
    const firebaseConfig = {

    apiKey: "AIzaSyAJbdkv6haicSTZJ5he3Y7uPO1DhVQZNEk",

    authDomain: "yasmin-s-wedding.firebaseapp.com",

    projectId: "yasmin-s-wedding",

    storageBucket: "yasmin-s-wedding.firebasestorage.app",

    messagingSenderId: "467282654791",

    appId: "1:467282654791:web:c60c1eb3d34182ff292362",

    measurementId: "G-1HM71Y4FJ6"

  };


    // Initialize Firebase 
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    // DOM Elements
    const input = document.getElementById('photoInput');
    const status = document.getElementById('status');

    input.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      status.textContent = 'Uploading...';

      // Create a unique file name
      const fileName = `photo_${Date.now()}.jpg`;
      const storageRef = ref(storage, `photos/${fileName}`);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        status.innerHTML = `✅ Uploaded! <br><a href="${downloadURL}" target="_blank">View Image</a>`;
      } catch (error) {
        console.error(error);
        status.textContent = '❌ Upload failed';
      }
    });
