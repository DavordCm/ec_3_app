import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyALriCR-eZBMk9jaIok5NzKnkN64xAe2fA",
      authDomain: "da-ii-2025-dced7.firebaseapp.com",
      projectId: "da-ii-2025-dced7",
      storageBucket: "da-ii-2025-dced7.firebasestorage.app",
      messagingSenderId: "104307683604",
      appId: "1:104307683604:web:04be8c47f168e9d618d201",
      measurementId: "G-6G2XXD6XSH"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
