import Signature from "@components/Signature";

export function Footer() {
  return (
    <footer className="flex justify-between max-md:flex-col max-md:mx-4 max-md:box-border">
      <div className="flex items-center opacity-60 hover:opacity-80 print:hidden">
        <p className="pr-[0.3rem]">overengineered by</p>
        <a
          href="https://github.com/danikova"
          className="text-primary-900 hover:underline"
        >
          danikova
        </a>
      </div>
      <div className="hidden print:block">
        <a
          href="https://danikova.github.io/online-cv/"
          className="text-primary-900 hover:underline"
        >
          danikova.github.io/online-cv/
        </a>
      </div>
      <Signature className="w-[300px] h-[50px] max-md:max-w-[200px]" />
    </footer>
  );
}
