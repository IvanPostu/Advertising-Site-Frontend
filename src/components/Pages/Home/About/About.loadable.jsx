import React, { Suspense } from 'react'

const AboutStatefull = React.lazy(() => import('./About.statefull.jsx'));
const LoadingComponent = () => (<div>Loading ...</div>)

export default function AboutLoadable() {
    return <Suspense fallback={<LoadingComponent />}>
        <AboutStatefull />
    </Suspense>
}
