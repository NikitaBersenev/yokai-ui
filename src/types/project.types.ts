import {IBase} from "@/types/root.types";

export interface IProject extends IBase{
    slug: string;
    name: string;
    description: string;
    soft: ISoft[];
}

export interface ISoft {
    text: string;
    slug: string;
    language: string;
}