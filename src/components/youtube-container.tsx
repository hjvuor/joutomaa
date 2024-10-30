export const YoutubeComponent = ({ value, isInline }) => {
  const { url } = value;
  const id = url.split("=").slice(-1);
  return (
    <div className="h-[400] w-full justify-items-center">
      <iframe
        width={600}
        height={400}
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
    </div>
  );
};
