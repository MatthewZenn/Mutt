import {get} from "axios";

/**
 * Retrieves the specified number of posts form the dog.ceo API.
 * @param number Number of posts to retrieve.
 * @returns {Promise<*[]>} Data from the API parsed into post objects.
 */
export default async function getPosts(number) {
    let ret = []

    for (var i = 0; i < number; i++) {
        const response = await get('https://dog.ceo/api/breeds/image/random');
        const data = await response.data;
        ret.push({
            dimg: data.message
        });
    }
    return ret
}