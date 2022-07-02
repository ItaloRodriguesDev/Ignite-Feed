import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

  export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post 
            author="Italo Rodrigues" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, iure vel reprehenderit neque obcaecati provident aspernatur quam perspiciatis dolores adipisci deserunt debitis fuga culpa animi dolorem? Accusantium, mollitia? Quaerat, ducimus!"
          />

          <Post 
            author="Gabriel" 
            content="Um novo post massa"
          />
        </main>
      </div>
    </div>
  )
}

