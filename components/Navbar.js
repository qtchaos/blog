import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={'text-highlight text-3xl md:text-4xl lg:text-5xl font-chandramaya'}>
      <div className={'container flex flex-wrap justify-between items-center mx-auto p-3'}>
        <Link href="/">Lorem</Link>
        <Link href="/">Homepage</Link>
        <Link href="/">Ipsum</Link>
      </div>
      <div className={'border-t-2 border-laurel'} />
    </nav>
  );
}

export default Navbar;