import './App.css';
import './assets/Grid/Grid.css';
import Banner from './Component/Banner/Banner';
import DestinationList from './Component/DestinationList/DestinationList';
import FeatureTour from './Component/FeatureTour/FeatureTour';
import Header from './Component/Header/Header';
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
        </div>
    );
}

export default App;
