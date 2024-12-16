import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import { IArticle } from '@/types/article.types'
import { PAGES } from '@/config/pages-url.config'

type Props = {
    params: {
        article: IArticle;
    }
}

export default function ArticleCard({params: article}: Props): JSX.Element {
    let data = [1, 2, 3, 4, 5];
    let type = "Article";
    let articleObj = article.article;
    const slug = articleObj.slug;
    return (
        <>
            <Link href={`${PAGES.ARTICLES}/${slug}/`}>
                <Card className="active:border-[#27272a] my-4 hover:border-white transition-all duration-100 ">
                    <CardHeader>
                        <CardTitle>{type} {slug}</CardTitle>
                        <CardDescription>{type} Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{type} Content</p>
                    </CardContent>
                    {/*<CardFooter>*/}
                    {/*    <p>Project Footer</p>*/}
                    {/*</CardFooter>*/}
                </Card>
            </Link>
        </>
    );
}
