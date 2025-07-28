import { managers } from '../../lib/managers';
import { useRouter } from 'next/router';

export default function Team() {
  const { id } = useRouter().query;
  const mgr = managers.find(m => m.managerID === id);
  if (!mgr) return <p>Loading…</p>;
  return (
    <div style={{ padding:'2rem', background:'#f9f4e6', minHeight:'100vh', fontFamily:'serif' }}>
      <h1>{mgr.name}</h1>
      <p>{mgr.bio}</p>
      <p>
        <a
          href={`https://sleeper.com/league/1191951185228357632/roster/${id}`}
          target="_blank"
          rel="noopener"
        >
          View on Sleeper
        </a>
      </p>
    </div>
  );
}
