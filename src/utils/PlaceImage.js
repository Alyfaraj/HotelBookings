import { googlePlaceKey } from "../services/constants"

export const getPlaceImage = (ref) => {
    return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&sensor=false&maxheight=880&maxwidth=550&key=${googlePlaceKey}`
}