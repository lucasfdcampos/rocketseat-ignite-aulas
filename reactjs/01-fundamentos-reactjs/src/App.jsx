import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: '1',
    author: {
      avatarUrl: 'http://github.com/lucasfdcampos.png',
      name: 'Lucas Campos',
      role: 'Dev Backend'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { type: 'paragraph', content: 'Quis dignissimos in quo quos necessitatibus atque, assumenda fugiat architecto placeat iure eveniet reprehenderit unde mollitia?', },
      { type: 'paragraph', content: 'Ad nostrum minus corporis explicabo reprehenderit!' },
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: '2',
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { type: 'paragraph', content: 'Quis dignissimos in quo quos necessitatibus atque, assumenda fugiat architecto placeat iure eveniet reprehenderit unde mollitia?', },
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}            
              />
            );
          })}

          
          {/* <Post 
            author="Lucas Campos" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos in quo quos necessitatibus atque, assumenda fugiat architecto placeat iure eveniet reprehenderit unde mollitia? Ad nostrum minus corporis explicabo reprehenderit!"
          />
          <Post 
            author="John Doe" 
            content="Novo post"
          /> */}
          

        </main>
      </div>
    </div>
  )
}

