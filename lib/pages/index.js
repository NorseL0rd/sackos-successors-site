import { leagueName } from '../lib/league';

export default function Home() {
  return (
    <div style={{ padding:'2rem', background:'#f9f4e6', minHeight:'100vh', fontFamily:'serif' }}>
      <h1>{leagueName}</h1>
      <p>Welcome to the Realm of Sacko’s Successors.</p>
    </div>
  );
}
