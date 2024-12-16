import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React from 'react'

// @ts-ignore
const CustomHeading = ({ level, children }) => {
	return (
		<h1 style={{ color: level === 1 ? 'darkblue' : 'darkgreen' }}>
			{children}
		</h1>
	);
};

// @ts-ignore
const CustomListItem = ({ children }) => {
	return (
		<li style={{ fontStyle: 'italic' }}>
			{children}
		</li>
	);
};

// @ts-ignore
const CustomLink = ({ href, children }) => {
	return (
		<a href={href} style={{ color: 'red', textDecoration: 'underline' }}>
			{children}
		</a>
	);
};

// @ts-expect-error
export const MarkdownRenderer = ({ content }) => {
	// @ts-ignore
	return (
		<div>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					em(props) {
						const {node, ...rest} = props
						return <i style={{color: 'red'}} {...rest} />
					},
					h1(props) {
						const {node, ...rest} = props
						return <i style={{color: 'red'}} {...rest} />
					},
					h2(props) {
						const {node, ...rest} = props
						return <i style={{color: 'red'}} {...rest} />
					},
					li(props) {
						const {node, ...rest} = props
						return <i style={{color: 'red'}} {...rest} />
					},
					a(props) {
						const {node, ...rest} = props
						return <i style={{color: 'red'}} {...rest} />
					},

					// h1: CustomHeading,
					// h2: CustomHeading,
					// li: CustomListItem,
					// a: CustomLink
				}}
			>
				{content}

			</ReactMarkdown>
		</div>
	)
}

// import createMDX from '@next/mdx'
//
// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	// Configure `pageExtensions` to include markdown and MDX files
// 	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
// 	// Optionally, add any other Next.js config below
// }
//
// const withMDX = createMDX({
// 	// Add markdown plugins here, as desired
// })
//
// // Merge MDX config with Next.js config
// export default withMDX(nextConfig)
//
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { unified } from "unified";
// // import remarkParse from "remark-parse";
// // import remarkRehype from "remark-rehype";
// // import rehypeReact from "rehype-react";
// //
// // export default function PrintMarkdown({markdown}) {
// // 	const content = unified()
// // 		.use(remarkParse)
// // 		.use(remarkRehype)
// // 		.use(rehypeReact, { createElement: React.createElement })
// // 		.processSync(markdown).result;
// //
// // 	return (
// // 		<div>
// // 			{content}
// // 		</div>
// // 	)
// // }