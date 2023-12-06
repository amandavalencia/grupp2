import { IStarResponse } from "./models/IStarResponse";
import axios from "axios";

export const get = async(url:string): Promise<IStarResponse> => {
    const response = await axios.get<IStarResponse>(url);
    return response.data;
}