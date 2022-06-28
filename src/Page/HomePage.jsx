import Banner from './../Component/Banner/Banner';
import Benefit from './../Component/Benefit/Benefit';
import BlogPost from './../Component/BlogPost/BlogPost';
import Description from './../Component/Description/Description';
import DestinationList from './../Component/DestinationList/DestinationList';
import FeatureTour from './../Component/FeatureTour/FeatureTour';
import FeedBack from './../Component/FeedBack/FeedBack';
import Gallery from './../Component/Gallery/Gallery';
import Partners from './../Component/Partners/Partners';
import Regiter from './../Component/Regiter/Regiter';
import SearchForm from './../Component/SearchForm/SearchForm';
import Trip from './../Component/Trip/Trip';

function HomePage() {
    return (
        <>
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
        </>
    );
}

export default HomePage;
