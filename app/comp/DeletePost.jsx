'use client'
import { useRouter } from "next/navigation"


export default function DeleteButton({postId}){
		
	const router = useRouter()
	
	const handleDelete = async () => {
		try {
			await fetch(`/api/post/${postId}`, {
				method: "DELETE"
			})
			router.refresh()
	} catch(e) {
		console.error(e);
		}
	}

	return(
		<>
		
		<button className="border px-2 py-1" onClick={handleDelete}>Delete</button>
		
		</>
	)


}

