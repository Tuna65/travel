import './Title.scss';

function Title({ ...item }) {
    return (
        <div className="Title__wrapper">
            <div className="Title__inner">
                <span className="Title__type">{item.type}</span>
                <span className="Title__note">{item.note}</span>
            </div>
        </div>
    );
}

export default Title;
