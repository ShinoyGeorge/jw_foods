import Header from '../components/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { cartActions } from '../store/cart.js';

export default function ProductDetails() {
    const params = useParams();
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.value);

    const product = products.find((p) => p.id === Number(params.id));

    const decrementHandler = (event) => {
        event.preventDefault();
        if (quantity > 0) {
            setQuantity((quantity) => quantity - 1);
        }
    };

    const incrementHandler = (event) => {
        event.preventDefault();
        setQuantity((quantity) => quantity + 1);
    };

    const addToCart = (event) => {
        event.preventDefault();
        let price = product.price * quantity;
        const payload = {
            weight: quantity,
            price: price,
        };

        dispatch(cartActions.add(payload));
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-14 flex flex-wrap items-center gap-2 text-sm text-gray-500"></div>
                    <div className="mb-16 grid gap-8 md:grid-cols-2">
                        <div className="overflow-hidden rounded-lg bg-gray-100">
                            <img
                                className="h-full w-full object-cover object-center"
                                src={product.img_src}
                                alt=""
                            />
                        </div>
                        <div>
                            <h1 className="mb-2 text-3xl font-bold text-custom-darkgray">
                                {product.name}
                            </h1>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex items-center"></div>
                                <div className="focus:ring-ring bg-destructive text-destructive-foreground hover:bg-destructive/80 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                                    Best Seller
                                </div>
                                <span className="text-gray-500">
                                    {product.badge}
                                </span>
                            </div>
                            <div className="mb-6 text-2xl font-bold text-custom-green">
                                $ {product.price}
                            </div>
                            <p className="mb-6 text-gray-700">
                                {product.description}
                            </p>
                            <div className="mb-3 flex items-center gap-2">
                                <span className="font-medium text-custom-darkgray">
                                    Source:
                                </span>
                                <span>{product.source}</span>
                            </div>
                            <div className="mb-3 flex items-center gap-2">
                                <span className="font-medium text-custom-darkgray">
                                    Weight:
                                </span>
                                <span>1 lb (454g)</span>
                            </div>
                            <div className="mb-3 flex items-center gap-2">
                                <div className="flex items-center">
                                    <button
                                        className="flex h-10 w-10 items-center justify-center rounded-l-md border border-gray-300 bg-gray-50"
                                        onClick={decrementHandler}
                                    >
                                        -
                                    </button>
                                    <div className="flex h-10 w-12 items-center justify-center border-y border-gray-300 bg-white">
                                        {quantity}
                                    </div>
                                    <button
                                        className="flex h-10 w-10 items-center justify-center rounded-r-md border border-gray-300 bg-gray-50"
                                        onClick={incrementHandler}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="ring-offset-background focus-visible:ring-ring text-primary-foreground inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-custom-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-custom-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <div className="mt-8 flex items-center gap-4"></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </main>
        </div>
    );
}
