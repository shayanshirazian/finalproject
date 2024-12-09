import { NextResponse } from "next/server";
// Importing Next.js's `NextResponse` to handle API responses.


type Dog = {
  dogName: string;
  recipes: string;
  portions: string;
  deliveryDate: string;
  status: string;
};
// Defining the `Dog` type structure, specifying the shape of each dog object in the data array.

// Initial Data
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
// A predefined list of objects representing orders for dogs, including their names, recipes, portions, delivery dates, and statuses.

// Utility Function: Validate Request Body
function validateRequestBody(body: any) {
  const { dogName, deliveryDate } = body;

  if (!dogName || !deliveryDate) {
    return { valid: false, error: "dogName and deliveryDate are required." };
  }
  // Checks if both `dogName` and `deliveryDate` exist in the request body. If not, returns an error message.

  const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(deliveryDate);
  if (!isValidDate) {
    return {
      valid: false,
      error: "Invalid deliveryDate format. Use 'YYYY-MM-DD'.",
    };
  }
  // Ensures that the `deliveryDate` follows the format 'YYYY-MM-DD'. If invalid, returns an error message.

  return { valid: true };
}
// A utility function to validate the request body for the required fields and ensure the `deliveryDate` format is correct.

// Utility Function: Find Dog by Name
function findDogByName(dogName: string) {
  const dogIndex = data.findIndex((dog) => dog.dogName === dogName);
  return dogIndex;
}
// A utility function to find the index of a dog in the `data` array based on its `dogName`. Returns the index or `-1` if not found.

// GET Handler: Return All Data
export async function GET() {
  return NextResponse.json(data);
}
// Handles GET requests. Returns the entire `data` array as a JSON response using `NextResponse.json()`.

// PUT Handler: Update Delivery Date
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    // Parses the request body as JSON.

    const validation = validateRequestBody(body);
    // Validates the request body.

    // Validate input
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    // If validation fails, returns a 400 error with the validation error message.

    const { dogName, deliveryDate } = body;
    // Extracts `dogName` and `deliveryDate` from the validated request body.

    // Find the dog to update
    const dogIndex = findDogByName(dogName);
    if (dogIndex === -1) {
      return NextResponse.json(
        { error: `Dog with name "${dogName}" not found.` },
        { status: 404 }
      );
    }
    // Checks if the specified `dogName` exists in the `data` array. If not, returns a 404 error.

    // Update the delivery date
    data[dogIndex].deliveryDate = deliveryDate;
    // Updates the `deliveryDate` of the matching dog in the `data` array.

    return NextResponse.json({
      message: "Delivery date updated successfully.",
      updatedDog: data[dogIndex],
      allDogs: data, // Optional: Return the full updated list
    });
    // Returns a success message with the updated dog's data and optionally the full updated list.
  } catch (error) {
    console.error("Unexpected error:", error);
    // Logs any unexpected errors to the console.

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
    // Returns a 500 error response for unexpected errors.
  }
}
