import {
  getVehicleIDAndStatusFromVin,
  wakeVehicle,
  jsonResponse,
} from "./tesla";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

// Assuming you've got a build tool that removes `export`s when you actually
// deploy your worker (e.g. https://esbuild.github.io/api/#format-iife)
export async function handleRequest(request) {
  const accessToken = "X-Tesla-access_token";
  const vin = "X-Tesla-vin";
  // const accessToken = request.headers.get("X-Tesla-access_token");
  // const vin = request.headers.get("X-Tesla-vin");

  try {
    // const { vehicleID, vehicleState } = await getVehicleIDAndStatusFromVin(
    //   accessToken,
    //   vin
    // );

    // await wakeVehicle(accessToken, vehicleID);

    const response = await fetch("https://example.com/foo");
    const text = await response.text();

    return jsonResponse("Response: " + text);
  } catch (errorMessage) {
    return jsonResponse("Error: " + errorMessage);
  }
}
