import Header from "./components/header";
import Post from "./components/post";
import SideBar from "./components/sidebar";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedro-demeu.png',
      name: "Pedro Miguel",
      role: "Desenvolvedor Frontend"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-13 20:42:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maik Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala Devv 👋' },
      { type: 'paragraph', content: 'Acabou de sair um novo vídeo no canal da Rocketseat, aonde mostramos um projeto incrivel e fullstack para você criar e colocar no portfolio, vai perder essa? 😍' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#nodejs #reactjs #reactnative' }
    ],
    publishedAt: new Date('2022-06-13 20:44:00'),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className="max-w-[1120px] mx-auto mt-6 flex gap-6">
        <SideBar />

        <div className="flex flex-col gap-6">
          {posts.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} published={post.publishedAt} />
          })}
        </div>
      </div>
    </>
  );
}

export default App;
