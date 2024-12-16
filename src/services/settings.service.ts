import Cookie from 'js-cookie';
import {ISettings} from "@/types/settings.types";
import Cookies from "js-cookie";

// export enum EnumSettings {
//
// }

export const CONST_SETTINGS = "settings";

export const getSettings = () => {
    const settings = Cookie.get(CONST_SETTINGS)
    return settings;
}


export const setSettings = (settings: string) => {
    Cookies.set(CONST_SETTINGS, settings)
    return settings;
}