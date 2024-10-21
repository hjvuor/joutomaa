'use client'


export default function FeedPost(props:{post:blogPost}) {
    return(
        <div className="space-x-4">
            <h2 className="text-3xl font-bold">{props.post.title}</h2>
            <h3>{props.post.author}</h3>
            <h3>{props.post.date}</h3>
            <p>{props.post.content}</p>
        </div>
    )
};
