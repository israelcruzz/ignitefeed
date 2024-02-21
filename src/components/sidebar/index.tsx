import Avatar from "../avatar";
import { PencilLine } from "phosphor-react";

const SideBar = () => {
  return (
    <aside className="w-[256px] h-[294px] flex flex-col items-center  rounded-lg overflow-hidden bg-[#202024]">
      <img
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt="background"
        className="w-[256px] h-[72px] object-cover"
      />

      <div className="-mt-12 w-full flex flex-col items-center border-b-2 border-[#323238] p-6">
        <Avatar
          hasBorder
          imageUrl="https://avatars.githubusercontent.com/u/128995099?v=4"
        />
        <h1 className="mt-4 text-[#E1E1E6] font-bold text-base">Israel Cruz</h1>
        <span className="text-[#8D8D99] text-sm">Fullstack</span>
      </div>

      <footer>
        <a
          href="#"
          className="mt-8 flex items-center gap-2 py-2 px-4 rounded-sm outline outline-2 outline-[#00B37E] text-[#00B37E]"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default SideBar;
