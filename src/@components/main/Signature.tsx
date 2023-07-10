export function Signature() {
  return (
    <footer className="flex justify-between">
      <div className="flex items-center opacity-60 hover:opacity-80">
        <p className="pr-[0.3rem]">overengineered by</p>
        <a href="https://github.com/danikova" className='text-primary-900 hover:underline'>danikova</a>
      </div>
      <img src="./signature.png" alt="signature" className="h-14" />
    </footer>
  );
}
