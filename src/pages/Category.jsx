import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products.js';
import Header from '../components/Header.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { useEffect } from 'react';

export default function Category() {
    const products = useSelector((state) => state.products.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <div
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1634384994932-161d1919dd8a?q=80&w=2023")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
                className="relative bg-custom-darkgray py-16 text-white"
            >
                <div className="container mx-auto px-4">
                    <a
                        className="mb-6 inline-flex items-center text-white transition-colors hover:text-custom-green"
                        href="/"
                    ></a>
                    <h1 className="text-4xl font-bold md:text-5xl">
                        Best-Sellers
                    </h1>
                    <p className="mt-4 max-w-3xl text-xl">
                        Our most popular products, loved by customers across the
                        Greater Toronto Area.
                    </p>
                </div>
            </div>
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <p className="max-w-4xl text-gray-600">
                            Discover our most popular products that keep our
                            customers coming back. From premium meats to organic
                            produce and specialty items, these best sellers
                            represent the quality and variety that J.W. Foods is
                            known for.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard details={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
