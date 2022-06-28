import ListTour from '../Component/ListTour/ListTour';
import BannerClone from '../Component/BannerClone/BannerClone';
import SearchForm from '../Component/SearchForm/SearchForm';

function TourPage() {
    return (
        <>
            <BannerClone title="Explore The Worlds" content="People Don't Take, Trips Take People" />
            <SearchForm />
            <ListTour />
        </>
    );
}

export default TourPage;
