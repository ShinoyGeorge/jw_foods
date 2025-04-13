import { Select, SelectValue } from '../utils/Select.jsx';

export default function DeliveryCalc() {
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
                            <Select></Select>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
