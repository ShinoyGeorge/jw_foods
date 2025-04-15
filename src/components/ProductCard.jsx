import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    return (
        <Link to={`/top-seller/${props.details.id}`}>
            <div className="bg-card text-card-foreground h-full overflow-hidden rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src={props.details.img_src}
                    />
                    <div className="focus:ring-ring bg-destructive text-destructive-foreground hover:bg-destructive/80 absolute right-2 top-2 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                        Best Seller
                    </div>
                </div>
                <div className="p-4">
                    <div>
                        <div>
                            <h3 className="line-clamp-2 text-lg font-semibold">
                                {props.details.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {props.details.badge}
                            </p>
                            {props.details.weight}
                        </div>
                        <div className="whitespace-nowrap font-bold text-custom-green">
                            {`$ ${props.details.price}`}
                        </div>
                    </div>
                    <p></p>
                    <div></div>
                </div>
            </div>
        </Link>
    );
}
