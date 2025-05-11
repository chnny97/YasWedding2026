

    // Import Firebase modules
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

    // Your Firebase config (replace with your values)
    const firebaseConfig = {

    apiKey: "AIzaSyBBJJeHURGsBux3bUOZ0o1E9XrUr6etHBs",

    authDomain: "sarah-and-doug-2025.firebaseapp.com",

    projectId: "sarah-and-doug-2025",

    storageBucket: "sarah-and-doug-2025.firebasestorage.app",

    messagingSenderId: "1030871235471",

    appId: "1:1030871235471:web:40220c1c2a71082e2769fa",

    measurementId: "G-XJJL710JTX"

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
