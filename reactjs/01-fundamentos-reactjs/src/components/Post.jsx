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
        <a href="">#project #coding #study</a>
      </div>
    </article>
  )
}