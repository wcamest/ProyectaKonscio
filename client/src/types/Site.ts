export default interface Site {
    id: string,
    sectionId: string,
    name: string,
    permalink: string,
    isBlogSite: boolean,
    isBlogPost: boolean,
    blogId: string,
    description: string
}