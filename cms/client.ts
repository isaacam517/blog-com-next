import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2021-05-27',
    useCdn: process.env.NODE_ENV === 'production'
})