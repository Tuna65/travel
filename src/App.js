import './App.css';
import './assets/Grid/Grid.css';
import Banner from './Component/Banner/Banner';
import Benefit from './Component/Benefit/Benefit';
import Description from './Component/Description/Description';
import DestinationList from './Component/DestinationList/DestinationList';
import FeatureTour from './Component/FeatureTour/FeatureTour';
import FeedBack from './Component/FeedBack/FeedBack';
import Gallery from './Component/Gallery/Gallery';
import Header from './Component/Header/Header';
import Partners from './Component/Partners/Partners';
import SearchForm from './Component/SearchForm/SearchForm';
import Top from './Component/Top/Top';
import Trip from './Component/Trip/Trip';

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
        </div>
    );
}

export default App;
