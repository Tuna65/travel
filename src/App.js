import './App.css';
import './assets/Grid/Grid.css';
import Banner from './Component/Banner/Banner';
import Benefit from './Component/Benefit/Benefit';
import BlogPost from './Component/BlogPost/BlogPost';
import Contact from './Component/Contact/Contact';
import Description from './Component/Description/Description';
import DestinationList from './Component/DestinationList/DestinationList';
import FeatureTour from './Component/FeatureTour/FeatureTour';
import FeedBack from './Component/FeedBack/FeedBack';
import Footer from './Component/Footer/Footer';
import Gallery from './Component/Gallery/Gallery';
import Header from './Component/Header/Header';
import Partners from './Component/Partners/Partners';
import Regiter from './Component/Regiter/Regiter';
import SearchForm from './Component/SearchForm/SearchForm';
import Top from './Component/Top/Top';
import Trip from './Component/Trip/Trip';

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
            <Banner />
            <SearchForm />
            <DestinationList />
            <Trip />
            <FeatureTour />
            <Description />
            <Partners />
            <FeedBack />
            <Gallery />
            <Benefit />
            <BlogPost />
            <Regiter />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
