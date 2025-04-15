import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function DeliveryCalc() {
    const config = useSelector((state) => state.admin.value);
    const [price, setPrice] = useState(1);
    const [inputDistance, setInputDistance] = useState('');

    const priceFromCart = useSelector((state) => state.cart.price);

    const onclickHandler = (event) => {
        event.preventDefault();
        setPrice(
            inputDistance * priceFromCart * Number(config[0].price_coefficient)
        );
    };

    const handleChange = (e) => {
        setInputDistance(e.target.value);
    };

    return (
        <div className="mt-12 rounded-lg bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-center text-2xl font-bold text-custom-darkgray">
                Delivery Calculator
            </h3>
            <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <div>
                            <label className="mb-2 block text-lg font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Delivery Distance
                            </label>
                            <input
                                type="text"
                                value={inputDistance}
                                onChange={handleChange}
                                className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring m-8 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            ></input>
                            <button
                                style={{ marginLeft: '30px' }}
                                className="ring-offset-background focus-visible:ring-ring inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-custom-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-custom-darkgreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                onClick={onclickHandler}
                            >
                                Calculate Price
                            </button>
                        </div>
                    </div>
                    <div className="bg-jwfoods-lightgray flex flex-col items-center justify-center rounded-lg p-6">
                        <h3>Delivery Estimate</h3>
                        <p>{price > 1 && price}</p>
                        <div className="mt-4 text-center text-xs text-gray-500">
                            Note: Cost includes the price of goods and deliver
                            price.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
