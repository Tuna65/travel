import Iframe from 'react-iframe';
import './VideoLayout.scss';

function VideoLayout({ ...item }) {
    return (
        <div
            className="Description__layout-video"
            style={item.state ? { display: 'flex' } : { display: 'none' }}
            onClick={() => {
                item.func(false);
            }}
        >
            <div className="Description__container-video">
                <Iframe
                    src="https://www.youtube.com/embed/MtCMtC50gwY"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                />
            </div>
        </div>
    );
}

export default VideoLayout;
