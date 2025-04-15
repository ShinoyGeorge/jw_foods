import { useDispatch } from 'react-redux';
import Header from '../components/Header.jsx';
import { addConfigurations } from '../store/admin.js';
import { useState } from 'react';

export default function Category() {
    const dispatch = useDispatch();
    const [config, setConfig] = useState(1);

    const addConfig = (event) => {
        event.preventDefault();
        dispatch(addConfigurations(config));
    };

    const changeHandler = (e) => {
        setConfig(e.target.value);
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <div
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1526897515823-424cd784315f?q=80&w=2070")',
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
                        Admin Dashboard
                    </h1>
                    <p className="mt-4 max-w-3xl text-xl">
                        Manage delivery costs and system configurations
                    </p>
                </div>
            </div>
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <div>
                        <label> co efficient</label>
                        <input
                            className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring m-8 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            value={config}
                            onChange={changeHandler}
                        ></input>
                        <div>
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"></label>
                        </div>
                        <button
                            className="ring-offset-background focus-visible:ring-ring text-primary-foreground m-8 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-custom-green px-4 py-2 pt-6 text-sm font-medium text-white transition-colors hover:bg-custom-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            onClick={addConfig}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
