import Link from 'next/link';

export default function About({ aboutGutheria }) {
  return (
    <header className="pt-20 pb-12">
    <div>
      <p>{aboutGutheria}</p>
    </div>
    </header>
  );
}
