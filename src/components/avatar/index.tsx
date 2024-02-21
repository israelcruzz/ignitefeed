interface AvatarProps {
  imageUrl: string;
  hasBorder: boolean;
}

const Avatar = ({ imageUrl, hasBorder }: AvatarProps) => {
  return (
    <img
      src={imageUrl}
      className={`rounded-lg w-12 h-12 object-cover outline-2 outline-gray-600  
      ${
        hasBorder &&
        "w-[calc(3rem + 12px)] h-[calc(3rem + 12px)] rounded-2xl outline-none outline-[#07c58c]"
      } 
      `}
      alt="image perfil"
    />
  );
};

export default Avatar;
