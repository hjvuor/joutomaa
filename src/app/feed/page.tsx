import FeedPost from './feedPost'

export default async function Feed() {
    let req = await fetch('http://localhost:3000/api/posts')
    let data: {posts: [blogPost]} = await req.json()

    return (
        <div className="mt-20 max-w-6xl flex flex-col justify-center items-center">
            <div className="text-6xl">JOUTOMAA</div>
            <div><br /><br /><br /></div>
            {data.posts.map(post =>
                <FeedPost key={post.id} post={post}></FeedPost>
            )
        }
        </div>
    )
}