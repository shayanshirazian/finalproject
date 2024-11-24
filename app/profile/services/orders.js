export const fetchOrders = async () => {
    // Exports an asynchronous function `fetchOrders` to fetch orders from the server.

    const response = await fetch("/api/dogs");
    // Sends a GET request to the `/api/dogs` endpoint and waits for the server response.

    if (!response.ok) {
        // Checks if the response status code is not in the 200–299 range (unsuccessful response).
        throw new Error("Failed to fetch orders.");
        // Throws an error with a custom message if the response is unsuccessful.
    }

    return response.json();
    // Parses the JSON data from the response and returns it to the caller.
};

export const updateOrderDate = async (dogName, deliveryDate) => {
    // Exports an asynchronous function `updateOrderDate` to update the delivery date of an order.

    const response = await fetch("/api/dogs", {
        method: "PUT",
        // Specifies that the request is a PUT request for updating resources.

        headers: {"Content-Type": "application/json"},
        // Sets the `Content-Type` header to indicate that the request body is in JSON format.

        body: JSON.stringify({dogName, deliveryDate}),
        // Converts the `dogName` and `deliveryDate` into a JSON string and sends it as the request payload.
    });

    if (!response.ok) {
        // Checks if the response status code is not in the 200–299 range (unsuccessful response).
        throw new Error("Failed to update order date.");
        // Throws an error with a custom message if the response is unsuccessful.
    }

    return response.json();
    // Parses the JSON data from the response and returns it to the caller.
};
