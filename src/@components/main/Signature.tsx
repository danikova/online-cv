export function Signature() {
  return (
    <footer className="flex justify-between max-md:flex-col max-md:mx-4 max-md:box-border">
      <div className="flex items-center opacity-60 hover:opacity-80">
        <p className="pr-[0.3rem]">overengineered by</p>
        <a href="https://github.com/danikova" className='text-primary-900 hover:underline'>danikova</a>
      </div>
      <img src="./signature.png" alt="signature" className="max-h-14 max-w-[350px] h-[auto] w-[auto] max-md:max-h-10 max-md:max-w-[calc(200px)]" />
    </footer>
  );
}
