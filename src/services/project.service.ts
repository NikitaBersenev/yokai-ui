import Cookie from 'js-cookie';
import {ISettings} from "@/types/settings.types";
import Cookies from "js-cookie";
import {IArticle} from "@/types/article.types";
import axios from "axios";
import {axiosClassic} from "@/api/interceptors";
import {IProject} from "@/types/project.types";

class ProjectService {
    private BASE_URL = '/article'

    async getProjects() {
        const response = await axiosClassic.get<IProject[]>(this.BASE_URL);
        return response;
    }

    async getProject(slug: string) {
        const response = await axiosClassic.get<IArticle[]>(`${this.BASE_URL}/${slug}`);
        return response;
    }
}