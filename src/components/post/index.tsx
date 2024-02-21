import { ChangeEvent, FormEvent, useState } from "react";
import Avatar from "../avatar";
import Comment from "../comment";

interface PostProps {
  author: { avatarUrl: string, name: string, role: string };
  content: { type: string, content: string }[];
  published: Date
}

const Post = ({ author, content, published }: PostProps) => {
  const [comments, setComments] = useState(['Belo Projeto Amigo'])
  const [newComment, setNewComment] = useState('')

  const handleNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value)
  }
  
  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([newComment, ...comments])
    setNewComment('')
  }

  const handleDeleteComment = (deleteComment: string) => {
    const newComments = comments.filter(comment => comment !== deleteComment)

    setComments(newComments)
  }

  return (
    <article className="w-[832px] mb-6 bg-[#202024] p-12 rounded-lg">
      <header className="w-full flex justify-between">
        <div className="flex gap-6 w-[300px]">
          <Avatar
            hasBorder
            imageUrl={author.avatarUrl}
          />

          <div>
            <h1 className="text-[#E1E1E6] font-bold text-base">{author.name}</h1>
            <span className="text-[#8D8D99] text-sm">{author.role}</span>
          </div>
        </div>

        <h1 className="text-[#8D8D99] text-sm">{published.toDateString()}</h1>
      </header>

      <div className="mt-6 mb-6 flex flex-col gap-6 text-base text-[#C4C4CC]">
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <a href="#" className="text-[#00B37E] font-bold">{line.content}</a>
          }
        })}
      </div>

      <div className="border border-[#323238]"></div>

      <form className="mt-6 flex flex-col gap-4" onSubmit={handleCreateNewComment}>
        <strong className="text-white">Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          className="bg-[#121214] rounded-lg p-4 h-[96px] text-white outline-none"
          onChange={handleNewComment}
          value={newComment}
        />

        <footer>
          <button type="submit" className="bg-[#00B37E] py-4 px-6 rounded-lg text-white font-bold">Publicar</button>
        </footer>
      </form>

      <div className="mt-6 flex flex-col gap-6 w-full">
        {comments.map(comment => {
          return <Comment content={comment} handleDeleteComment={handleDeleteComment} />
        })}
      </div>
    </article>
  );
};

export default Post;
