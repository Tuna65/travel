import BannerClone from './../../Component/BannerClone/BannerClone';
import img1 from './../../assets/img/post-1-580x450.jpg';
import img2 from './../../assets/img/post-2-580x450.jpg';
import img3 from './../../assets/img/post-3-580x450.jpg';
import img4 from './../../assets/img/post-4-580x450.jpg';
import img5 from './../../assets/img/post-5-580x450.jpg';
import img6 from './../../assets/img/post-6-580x450.jpg';
import BlogCard from './../../Component/BlogCard/BlogCard';

import './NewsPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
function NewsPage() {
    const data = [
        {
            path: img1,
            comment: 3,
            title: 'A Place where Start New Life with Peace',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img2,
            comment: 4,
            title: 'Journeys are Best Measured with Friends',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img3,
            comment: 5,
            title: 'Travel the Most Beautiful Places in the World',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img4,
            comment: 2,
            title: 'Top 10 Destinations & Adventure Trips',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img5,
            comment: 3,
            title: 'The Surfing Man Will Blow Your Mind',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
        {
            path: img6,
            comment: 5,
            title: 'Things to See and Do When Visiting Japan',
            description: 'There are many variation of but the majority have simply free text available not suffered.',
        },
    ];
    return (
        <>
            <BannerClone title="News" content="" />
            <div className="NewsPage__cardBlog grid">
                <div className="row">
                    {data.map((item, index) => (
                        <div className="col l-4" key={index}>
                            <BlogCard {...item} />
                        </div>
                    ))}
                </div>
                <div className="NewsPage__type-card">
                    <span>Home</span>
                    <span>/</span>
                    <span>News</span>
                </div>
                <div className="NewsPage__number-page">
                    <nav className="active">1</nav>
                    <nav>2</nav>
                    <nav>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </nav>
                </div>
            </div>
        </>
    );
}

export default NewsPage;
