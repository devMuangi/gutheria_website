import Link from 'next/link';

export default function Mission({ missionGutheria}) {
  return (
    <header className="pt-20 pb-12">
    <div>
      <p>{missionGutheria}</p>
    </div>
    </header>
  );
}
