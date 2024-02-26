'use client'

import { useState }  from "react"
import Link from "next/link"



export default function AddPost(){
	
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	
	
	
	const handleTitle = (e) => {
		e.preventDefault()
		
		setTitle(e.target.value);
	}
	
	const handleContent = (e) => {
		e.preventDefault()
		
		setContent(e.target.value);
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		try{
			fetch("/api/add-post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({title, content})
			})
		} catch (error) { console.error(error) }
		
		
		setTitle("")
		setContent("")
		
		
	}


	return(
		<>
			<div>
				<h1>Add Post</h1>
				
				<Link className="border rounded-md px-3 py-2" href={"/"}>Home</Link>
				
				<form className="border px-3 py-2 mx-auto w-1/2" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="title">Title :</label>
						<input 
							type="text"
							id="title"
							value={title}
							onChange={handleTitle}
							required
						/>
					</div>
					
					<div>
						<label htmlFor="content">Content :</label>
						<input 
							type="text"
							id="content"
							value={content}
							onChange={handleContent}
							required
						/>
					</div>
					<button className=" border rounded px-2 py-1" type="submit">Submit</button>
				</form>
				
				
			</div>
		
		</>
	
	)
	
}
