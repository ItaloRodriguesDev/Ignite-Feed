
import styles from './Avatar.module.css'


/*Nesta função nós ultilizamos o conceito de desestruturação ({hasborder = true, src})*/
export function Avatar({ hasBorder = true, src}) {  
  return (          /* If: se as minhas propriedades tem hasBorder ? mostrar withborder :(senão) stylesavatar, sem borda*/
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src}
    alt="Imagem de perfil" 
    />
  )
}