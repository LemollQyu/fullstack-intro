import prisma from "@/libs/prisma"
import Post from "./comp/Post"
import Link from "next/link"

async function getPosts(){
	const posts = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: {name: true}
			}
		}
	})
	
	return posts;
}

export default async function Home() {
  const posts = await getPosts()	

	
	
  return (
    <main>
		<h1 className="mb-10">Feeds</h1>
		
		<Link className=" border px-2 py-1 rounded-md" href={"/add-post"}>Add Post</Link>
		<div className="grid grid-cols-4 gap-4">
		{
			posts.map((post) => {
				return(
				<Post 
			key={post.id}
			id={post.id}
			title={post.title}
			content={post.content}
			authorName={post.author.name}
			
		/>
				
				)
			})
			
		}
		</div>
		
    </main>
  );
}
