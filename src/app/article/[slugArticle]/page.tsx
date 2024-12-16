import {Metadata} from "next";
import {metadata} from "@/app/layout";
import Welcome from '@/app/markdown/welcome.mdx'
import Article2 from '@/app/article/[slugArticle]/Article2'

type Props = {
    params: {
        slugArticle: string;
    }
}

export async function generateMetadata({params: slugArticle}: Props): Promise<Metadata> {
    return {
        title: slugArticle.slugArticle,
    }
}

export default function ArticlePage({params: {slugArticle}}: Props) {
    return (<Article2 params={{slugArticle: slugArticle}}/>);
    // const markdown = `
    //   ## _The Last Markdown Editor, Ever_
    //   `;
    // return (
    //     <>
    //         {/*{markdown}*/}
    //         <Welcome></Welcome>
    //     </>
    // );
};