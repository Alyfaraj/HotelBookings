import axios from "axios"
import { googlePlaceKey } from "./constants"

export const getHotels = async (lat, long) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=10000&keyword=hotel&key=${googlePlaceKey}`
    return await axios.get(url)

}
