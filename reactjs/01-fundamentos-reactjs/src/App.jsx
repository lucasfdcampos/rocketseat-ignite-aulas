import { Post } from "./Post"

export function App() {
  return (
    <>
      <Post 
        author="Lucas Campos" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos in quo quos necessitatibus atque, assumenda fugiat architecto placeat iure eveniet reprehenderit unde mollitia? Ad nostrum minus corporis explicabo reprehenderit!"
      />
       <Post 
        author="John Doe" 
        content="Novo post"
      />
    </>
  )
}

