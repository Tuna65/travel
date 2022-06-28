import BannerClone from '../../Component/BannerClone/BannerClone';
import DestinationCard from './../../Component/DestinationCard/DestinationCard';
import Title from './../../Component/Title/Title';
import Description from './../../Component/Description/Description';

import './DestinationPage.scss';

import img1 from './../../assets/img/image-2.jpg';
import img2 from './../../assets/img/image-1.jpg';
import img3 from './../../assets/img/image-3.jpg';
import img4 from './../../assets/img/image-4.jpg';
import img5 from './../../assets/img/image-5.jpg';
import img9 from './../../assets/img/image-9.jpg';
import img10 from './../../assets/img/image-10.jpg';
import img11 from './../../assets/img/image-11.jpg';

function DestinationPage() {
    return (
        <>
            <BannerClone title="Destination" content="" />
            <div className="Dp__title">
                <Title type="Destination lists" note="Go Exotic Places" />
            </div>
            <div className="grid DP__container">
                <div className="row">
                    <div className="col l-3">
                        <DestinationCard path={img1} type="" country="Moroco" number="3" />
                    </div>
                    <div className="col l-6">
                        <DestinationCard path={img2} type="Wildlife" country="United Kingdom" number="6" />
                    </div>
                    <div className="col l-3">
                        <DestinationCard path={img3} type="" country="Singapore" number="3" />
                    </div>
                    <div className="col l-6">
                        <DestinationCard path={img4} type="Wildlife" country="Hungary" number="3" />
                    </div>
                    <div className="col l-6">
                        <DestinationCard path={img5} type="Adventure" country="Italy" number="3" />
                    </div>
                    <div className="col l-3">
                        <DestinationCard path={img9} type="" country="Japan" number="3" />
                    </div>
                    <div className="col l-3">
                        <DestinationCard path={img10} type="" country="Moroco" number="3" />
                    </div>
                    <div className="col l-3">
                        <DestinationCard path={img11} type="" country="Singapore" number="3" />
                    </div>
                    <div className="col l-3">
                        <DestinationCard path={img1} type="" country="Moroco" number="3" />
                    </div>
                </div>
            </div>
            <Description />
        </>
    );
}

export default DestinationPage;
