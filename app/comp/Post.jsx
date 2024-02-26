import Delete from "./DeletePost"

export default function Post({id, title, content, authorName}) {
	return (
		<> 
		
			<div className="border p-5">
	
				<h3>{authorName}</h3>
				<h4>{title}</h4>
				<p>{content}</p>
				<Delete postId={id} />
				
			
			</div>
		
		</>
	)
}