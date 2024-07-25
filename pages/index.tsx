import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Payremit Admin Dashboard!</h1>
      <p>
        <Link href="/admin/user-directory">Go to User Directory</Link>
      </p>
    </div>
  );
};

export default Home;
