import ContactForm from './../../Component/ContactForm/ContactForm';
import BannerClone from './../../Component/BannerClone/BannerClone';
import './ContactPage.scss';

function ContactPage() {
    return (
        <div className="ContactPage__wrapper">
            <div className="ContactPage__inner">
                <BannerClone title="Contact" />
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactPage;
