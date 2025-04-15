import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import Intro from '../components/Intro.jsx';

function App() {
    const indexData = {
        title: 'Welcome To The Family!',
        description:
            'Explore our one-stop shop for healthy eating with a variety of raw and cooked food products. Embrace wholesome nutrition to fuel your body.',
        buttons: [
            { text: 'Our Services', isPrimary: true },
            { text: 'Contact Us', isPrimary: false },
        ],
    };

    return (
        <div>
            <Header />
            <Section indexData={indexData} />
            <Intro />
        </div>
    );
}

export default App;
