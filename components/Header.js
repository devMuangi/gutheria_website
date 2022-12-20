import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="flex gap-4 pt-20 pb-12">
      <div className="w-10 h-10 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
