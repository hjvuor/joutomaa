interface ytType {
  url: string
}

export const YoutubeComponent = ({ 
    value, 
    isInline 
  } : {value: ytType, isInline: boolean}) => {
  const { url } = value;
  const id = url.split("=").slice(-1);
  return (
    <div className="w-full justify-items-center pb-6">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      { isInline }
    </div>
    
  );
};
