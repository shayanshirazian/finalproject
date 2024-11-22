import { NextResponse } from "next/server";

type Dog = {
    dogName: string;
    recipes: string;
    portions: string;
    deliveryDate: string;
    status: string;
};

let data: Dog[] = [
    {
        dogName: "Cola",
        recipes: "2 Chicken, 4 Beef",
        portions: "Full meal",
        deliveryDate: "04/09/2024",
        status: "Shipped",
    },
    {
        dogName: "Ible",
        recipes: "2 Chicken, 4 Beef",
        portions: "Full meal",
        deliveryDate: "04/09/2024",
        status: "Shipped",
    },
    {
        dogName: "Rocky",
        recipes: "2 Chicken, 4 Beef",
        portions: "Full meal",
        deliveryDate: "04/09/2024",
        status: "Shipped",
    },
    {
        dogName: "Toflie",
        recipes: "2 Chicken, 4 Beef",
        portions: "Full meal",
        deliveryDate: "04/09/2024",
        status: "Shipped",
    },
    {
        dogName: "Res",
        recipes: "2 Chicken, 4 Beef",
        portions: "Full meal",
        deliveryDate: "04/09/2024",
        status: "Shipped",
    },
];

export async function GET() {
    return NextResponse.json(data);
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { dogName, deliveryDate } = body;

        // Validate input
        if (!dogName || !deliveryDate) {
            return NextResponse.json(
                { error: "Invalid request: dogName and deliveryDate are required." },
                { status: 400 }
            );
        }

        // Validate deliveryDate format
        const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(deliveryDate);
        if (!isValidDate) {
            return NextResponse.json(
                { error: "Invalid deliveryDate format. Use 'YYYY-MM-DD'." },
                { status: 400 }
            );
        }

        // Find and update the relevant dog
        const dogIndex = data.findIndex((dog) => dog.dogName === dogName);
        if (dogIndex === -1) {
            return NextResponse.json(
                { error: `Dog with name "${dogName}" not found.` },
                { status: 404 }
            );
        }

        data[dogIndex].deliveryDate = deliveryDate; // Update the delivery date

        return NextResponse.json({
            message: "Delivery date updated successfully.",
            updatedDog: data[dogIndex],
            allDogs: data, // Optional: Return the full updated list
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
