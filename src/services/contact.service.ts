import Cookie from 'js-cookie';
import {ISettings} from "@/types/settings.types";
import Cookies from "js-cookie";
import {IArticle} from "@/types/article.types";
import axios from "axios";
import {axiosClassic} from "@/api/interceptors";
import {IContact} from "@/types/contact.service";

class ContactService {
    private BASE_URL = '/contact'

    async getContacts() {
        const response = await axiosClassic.get<IContact[]>(this.BASE_URL);
        return response;
    }
}