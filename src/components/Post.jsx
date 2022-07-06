import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return( 
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder
          src="https://github.com/maykbrito.png" 
          alt="" />
          <div className={styles.authorInfo}>
            <strong>Italo Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="02 de Julho às 18:37" dataTime="">Publicado há 1hora</time>

                
      </header>

      <div className={styles.content}>
         <p>Fala galera</p>
         <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat</p>
         <p><a href="#"> 👉 jane.design/doctorcare</a></p>
         <p>
           <a href="">
             <a>#novoprojeto</a>{' '}
             <a>#nlw</a>{' '}
             <a>#rocketseat</a>{' '}
             </a>
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
          <Comment/>
          <Comment/>
          <Comment/>
        </div>

    </article>
  )
}