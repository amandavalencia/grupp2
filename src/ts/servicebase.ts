import { IStarResponse } from "./models/IStarResponse";

export const get = async(url) => {
    const response = await axios.get<IStarResponse[]>();
    return response.data;
}