import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Lucas Campos" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos in quo quos necessitatibus atque, assumenda fugiat architecto placeat iure eveniet reprehenderit unde mollitia? Ad nostrum minus corporis explicabo reprehenderit!"
          />
          <Post 
            author="John Doe" 
            content="Novo post"
          />
        </main>
      </div>
    </div>
  )
}

