import styles from './Post.module.css';

export function Post() {
  return( 
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/87343163?v=4" 
          alt="" />
          <div className={styles.authorInfo}>
            <strong>Italo Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time>Publicado há 1hora</time>
        
      </header>
    </article>
  )
}