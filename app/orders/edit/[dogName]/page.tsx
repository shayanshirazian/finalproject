"use client";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";

type Order = {
    dogName: string;
    recipes: string;
    portions: string;
    deliveryDate: string;
    status: string;
};

const EditOrderPage = ({params}: { params: { dogName: string } }) => {
    const {dogName} = params; // Extract the dog name from the URL
    const [order, setOrder] = useState<Order | null>(null);
    const [deliveryDate, setDeliveryDate] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Fetch the order details on page load
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch("/api/dogs");
                if (!response.ok) throw new Error("Failed to fetch orders");

                const data: Order[] = await response.json();
                const currentOrder = data.find((o) => o.dogName === dogName);

                if (!currentOrder) throw new Error("Order not found");

                setOrder(currentOrder);
                setDeliveryDate(currentOrder.deliveryDate);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [dogName]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/dogs", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({dogName, deliveryDate}),
            });

            if (!response.ok) throw new Error("Failed to update order");

            router.push("/"); // Redirect back to the main page
        } catch (err: any) {
            setError(err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-full max-w-md"
            >
                <h1 className="text-2xl font-bold mb-4">Edit Delivery Date for {dogName}</h1>

                <label htmlFor="deliveryDate" className="block text-sm text-gray-700">
                    Delivery Date
                </label>
                <input
                    type="date"
                    id="deliveryDate"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="mt-2 p-2 border border-gray-300 rounded w-full"
                    required
                />

                <button
                    type="submit"
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditOrderPage;
