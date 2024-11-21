import Articles from '@/app/article/Articles'
import { Suspense } from 'react'

export default function Articles2() {
	return (
		<Suspense>
			<Articles />
		</Suspense>
	)
};