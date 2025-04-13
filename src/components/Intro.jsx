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
        },
        {
            src: fishMeat,
            title: 'Meat & Fish',
            description: 'Elevate Your Cuisine with Premium Meats & Fish',
        },
        {
            src: preSetMeal,
            title: 'Pre-set Meals',
            description:
                'Revolutionize your meals with our healthy meal prep solutions!',
        },
    ];
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-jwfoods-lightgray py-20">
                <div className="section-container">
                    <h2 className="section-heading">Our Services</h2>
                    <div className="mb-16 grid gap-8 md:grid-cols-3">
                        {cards.map((card, index) => (
                            <Card {...card} key={index} />
                        ))}
                    </div>
                </div>
                <DeliveryCalc />
            </section>
        </div>
    );
}
