import './App.css';
import './assets/Grid/Grid.css';
import { Routes, Route } from 'react-router-dom';

import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Top from './Component/Top/Top';
import HomePage from './Page/HomePage';
import TourPage from './Page/TourPage';
import DestinationPage from './Page/DestinationPage/DestinationPage';
import NewsPage from './Page/NewsPage/NewsPage';
import ContactPage from './Page/ContactPage/ContactPage';
import PostPage from './Page/PostPage/PostPage';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBxvB7GxQlej3YNChOzT3EgPl-TADP7Qdg',
    authDomain: 'travel-web-a946f.firebaseapp.com',
    projectId: 'travel-web-a946f',
    storageBucket: 'travel-web-a946f.appspot.com',
    messagingSenderId: '398319883266',
    appId: '1:398319883266:web:ea2573967aabf83437c31b',
    measurementId: 'G-DQVXKKFBTN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <div className="App">
            <Top />
            <Header />
            {/* ========== */}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tour" element={<TourPage />} />
                <Route path="/destination" element={<DestinationPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/posts" element={<PostPage />} />
            </Routes>

            {/* ========== */}
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
