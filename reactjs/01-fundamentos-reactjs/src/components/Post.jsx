import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucasfdcampos.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Campos</strong>
            <span>Developer</span>
          </div>
        </div>        

        <time 
          title="11 de Maio às 08:13h" 
          dateTime="2022-05-11 08:13:20">
            Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Post 1</p>
        <p>
          <a href="">#study</a>
          <a href="">#coding</a>
          <a href="">#newproject</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}