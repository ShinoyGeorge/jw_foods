import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-48 overflow-hidden">
                <img
                    src={props.src}
                    alt={props.title}
                    className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-jwfoods-darkgray mb-3 text-xl font-bold">
                    {props.title}
                </h3>
                <p className="mb-4 h-8 pb-16 text-gray-700">
                    {props.description}
                </p>
                <button
                    className="flex items-center font-semibold text-custom-green"
                    onClick={props.handleClick}
                >
                    See More →
                </button>
            </div>
        </div>
    );
}
