import {IBase} from "@/types/root.types";

export interface IArticle extends IBase{
    slug: string;
    name: string;
    text: string;
    soft: ISoft[];
}

export interface ITag {
    text: string;
    slug: string;
}

export interface ISoft extends ITag{
    language: string;
}