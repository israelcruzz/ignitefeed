import Avatar from "../avatar";
import Comment from "../comment";

const Post = () => {
  return (
    <article className="w-[832px] mb-6 bg-[#202024] p-12 rounded-lg">
      <header className="w-full flex justify-between">
        <div className="flex gap-6 w-[168px]">
          <Avatar
            hasBorder
            imageUrl="https://avatars.githubusercontent.com/u/128995099?v=4"
          />

          <div>
            <h1 className="text-[#E1E1E6] font-bold text-base">Israel Cruz</h1>
            <span className="text-[#8D8D99] text-sm">Fullstack</span>
          </div>
        </div>

        <h1 className="text-[#8D8D99] text-sm">Públicado há 1h</h1>
      </header>

      <div className="mt-6 mb-6 flex flex-col gap-6 text-base text-[#C4C4CC]">
        <h1>Fala galeraa 👋</h1>

        <span>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </span>

        <a href="#" className="text-[#00B37E] font-bold">
          {" "}
          👉 jane.design/doctorcare
        </a>
        <a href="#" className="text-[#00B37E] font-bold">
          {" "}
          👉 #novoprojeto #nlw #rocketseat
        </a>
      </div>

      <div className="border border-[#323238]"></div>

      <form className="mt-6 flex flex-col gap-4">
        <strong className="text-white">Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          className="bg-[#121214] rounded-lg p-4 h-[96px] text-white"
        />

        <footer>
          <button type="submit" className="bg-[#00B37E] py-4 px-6 rounded-lg text-white font-bold">Publicar</button>
        </footer>
      </form>

      <div className="mt-6 flex flex-col gap-6 w-full">
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export default Post;
