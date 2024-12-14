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
    deliveryDate: "2024-09-04",
    status: "Shipped",
  },
  {
    dogName: "Ible",
    recipes: "2 Chicken, 4 Beef",
    portions: "Full meal",
    deliveryDate: "2024-09-04",
    status: "Shipped",
  },
  {
    dogName: "Rocky",
    recipes: "2 Chicken, 4 Beef",
    portions: "Full meal",
    deliveryDate: "2024-09-04",
    status: "Pending",
  },
  {
    dogName: "Toflie",
    recipes: "2 Chicken, 4 Beef",
    portions: "Full meal",
    deliveryDate: "2024-09-04",
    status: "Pending",
  },
  {
    dogName: "Res",
    recipes: "2 Chicken, 4 Beef",
    portions: "Full meal",
    deliveryDate: "2024-09-04",
    status: "Pending",
  },
];
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
function findDogByName(dogName: string) {
  const dogIndex = data.findIndex((dog) => dog.dogName === dogName);
  return dogIndex;
}
export async function GET() {
  return NextResponse.json(data);
}
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const validation = validateRequestBody(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const { dogName, deliveryDate } = body;
    const dogIndex = findDogByName(dogName);
    if (dogIndex === -1) {
      return NextResponse.json(
        { error: `Dog with name "${dogName}" not found.` },
        { status: 404 }
      );
    }
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
