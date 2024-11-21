import Cookie from 'js-cookie';
import {ISettings} from "@/types/settings.types";
import Cookies from "js-cookie";
import {IArticle} from "@/types/article.types";
import axios from "axios";
import {axiosClassic} from "@/api/interceptors";

class ArticleService {
    private BASE_URL = '/article'

    async getArticles() {
        const response = await axiosClassic.get<IArticle[]>(this.BASE_URL);
        return response;
    }

    async getArticle(slug: string) {
        const response = await axiosClassic.get<IArticle[]>(`${this.BASE_URL}/${slug}`);
        return response;
    }
}