

declare global {
    interface blogPost {
        id: string,
        author: string,
        title: string,
        date: string,
        summary: string,
        content: string
    }
}



export default global