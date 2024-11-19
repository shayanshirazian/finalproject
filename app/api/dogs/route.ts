import { NextResponse } from 'next/server';

// Define the type for the dog data
type Dog = {
    dogName: string;
    recipes: string;
    portions: string;
    deliveryDate: string;
    status: string;
};

// The API handler
export async function GET() {
    // Define the JSON data
    const data: Dog[] = [
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

    // Return the JSON data
    return NextResponse.json(data);
}