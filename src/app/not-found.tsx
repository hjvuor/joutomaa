export default function NotFound() {
  return (
    <>
      <title>404: Sivua ei olemassa.</title>
      <div className="p-6">
        <div className="flex flex-col justify-items-center mx-auto">
          <h1 className="text-4xl font-bold text-green-600 justify-items-center w-full">
            404
          </h1>
          <div className="text-lg text-green-600 justify-items-center w-full" >
            <h2>Sivua ei ole olemassa. Jos mielestäsi sivun pitäisi olla olemassa, lähetä sähköpostia joutomaa.online@protonmail.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}