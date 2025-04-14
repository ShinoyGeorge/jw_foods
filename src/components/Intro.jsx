import Card from '../utils/Card.jsx';
import topSeller from '../assets/top_seller.jpg';
import fishMeat from '../assets/meat_fish.jpg';
import preSetMeal from '../assets/pre_set_meals.jpg';
import DeliveryCalc from './DeliveryCalc.jsx';

export default function Intro() {
    const cards = [
        {
            src: topSeller,
            title: 'Top Sellers',
            description:
                'Not sure where to start? Try the top picks our customers keep coming back for!',
            handleClick: () => {
                console.log('topSeller clicked');
            },
        },
        {
            src: fishMeat,
            title: 'Meat & Fish',
            description: 'Elevate Your Cuisine with Premium Meats & Fish',
            handleClick: () => {
                console.log('Meat and fish clicked');
            },
        },
        {
            src: preSetMeal,
            title: 'Pre-set Meals',
            description:
                'Revolutionize your meals with our healthy meal prep solutions!',
            handleClick: () => {
                console.log('pre set meals clicked');
            },
        },
    ];
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-jwfoods-lightgray py-20">
                <div className="section-container">
                    <h2 className="section-heading">Featured Categories</h2>
                    <div className="mb-16 grid gap-8 md:grid-cols-3">
                        {cards.map((card) => (
                            <Card {...card} key={card.title} />
                        ))}
                    </div>
                </div>
                <DeliveryCalc />
            </section>
        </div>
    );
}
