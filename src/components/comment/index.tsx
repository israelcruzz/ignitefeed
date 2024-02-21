import { useState } from "react";
import Avatar from "../avatar";
import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps {
  content: string
  handleDeleteComment: (deleteComment: string) => void
}

const Comment = ({ content, handleDeleteComment }: CommentProps) => {
  const [like, setLike] = useState<number>(0)

  const handleAddLike = () => {
    setLike(like => like + 1)
  }

  const deleteMyComment = () => {
    handleDeleteComment(content)
  }

  return (
    <div className="w-full flex gap-2">
      <section>
        <Avatar
          hasBorder={false}
          imageUrl="https://avatars.githubusercontent.com/u/128995099?v=4"
        />
      </section>

      <div className="w-full flex flex-col gap-4">
        <section className="bg-[#29292E] p-4 rounded-lg w-full">
          <div>
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-[#E1E1E6] font-bold text-sm">
                  Israel Cruz <span className="text-[#8D8D99] font-normal">(você)</span>
                </h1>
                <span className="text-xs text-[#8D8D99]">há 1 min</span>
              </div>

              <div className="text-[#8D8D99] cursor-pointer">
                <button onClick={deleteMyComment}>
                  <Trash size={24} />
                </button>
              </div>
            </div>

            <h1 className="mt-4 text-[#C4C4CC] font-normal">{content}</h1>
          </div>
        </section>

        <footer>
          <button className="flex items-center justify-center gap-2 text-[#8D8D99]" onClick={handleAddLike}>
            <ThumbsUp />
            Aplaudir •
            <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
