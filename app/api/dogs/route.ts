import { NextResponse } from "next/server";

// Define the Dog type
type Dog = {
    dogName: string;
    recipes: string;
    portions: string;
    deliveryDate: string;
    status: string;
};

// Initial Data
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

// Utility Function: Validate Request Body
function validateRequestBody(body: any) {
    const { dogName, deliveryDate } = body;

    if (!dogName || !deliveryDate) {
        return { valid: false, error: "dogName and deliveryDate are required." };
    }

    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(deliveryDate);
    if (!isValidDate) {
        return {
            valid: false,
            error: "Invalid deliveryDate format. Use 'YYYY-MM-DD'.",
        };
    }

    return { valid: true };
}

// Utility Function: Find Dog by Name
function findDogByName(dogName: string) {
    const dogIndex = data.findIndex((dog) => dog.dogName === dogName);
    return dogIndex;
}

// GET Handler: Return All Data
export async function GET() {
    return NextResponse.json(data);
}

// PUT Handler: Update Delivery Date
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const validation = validateRequestBody(body);

        // Validate input
        if (!validation.valid) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        const { dogName, deliveryDate } = body;

        // Find the dog to update
        const dogIndex = findDogByName(dogName);
        if (dogIndex === -1) {
            return NextResponse.json(
                { error: `Dog with name "${dogName}" not found.` },
                { status: 404 }
            );
        }

        // Update the delivery date
        data[dogIndex].deliveryDate = deliveryDate;

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
