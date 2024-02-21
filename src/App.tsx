import Header from "./components/header"
import Post from "./components/post"
import SideBar from "./components/sidebar"

function App() {
  return (
    <>
      <Header />

      <div className="max-w-[1120px] mx-auto mt-6 flex gap-6">
        <SideBar />
        <Post />
      </div>
    </>
  )
}

export default App
