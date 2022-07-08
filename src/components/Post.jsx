import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return( 
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
          src={props.author.avatarUrl} 
          alt="" />
          <div className={styles.authorInfo}>
            <strong>Italo Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="02 de Julho às 18:37" dataTime="">Publicado há 1hora</time>

                
      </header>

      <div className={styles.content}>

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
          <Comment/>
          <Comment/>
          <Comment/>
        </div>

    </article>
  )
}