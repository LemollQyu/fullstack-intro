'use client'

import { useState }  from "react"


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
		
		console.log(title)
		console.log(content)
		
		
		setTitle("")
		setContent("")
		
	}


	return(
		<>
			<div>
				<h1>Add Post</h1>
				
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
