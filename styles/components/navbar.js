import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/admin/user-directory">User Directory</Link></li>
        {/* Add other navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
