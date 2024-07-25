import { useRouter } from "next/router";
import users from "../../../data/users";
import Dropdown from "../../../styles/components/Dropdown";
import { FaChevronLeft } from "react-icons/fa";

const UserProfile = () => {
  const router = useRouter();
  const { push } = useRouter();
  const { id } = router.query;
  const user = users.find((user) => user.id === id);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="p-4 max-w-7xl mx-auto">
        <button
          className="mb-8 !bg-blue-600 rounded-full p-5 text-white"
          onClick={() => push("/admin/user-directory")}
        >
          <FaChevronLeft />
        </button>
        <h1 className="text-3xl font-bold mb-4">{`${user.firstName} ${user.lastName}'s Profile`}</h1>
        <div className="p-4 rounded shadow shadow-slate-200 text-end">
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>KYC Level:</strong> {user.kyc}
          </p>
          <p>
            <strong>Crypto Balance:</strong> {user.cryptoBalance.BTC} BTC,{" "}
            {user.cryptoBalance.TRX} TRX
          </p>
          <p>
            <strong>NGN Balance:</strong> {user.ngnBalance} NGN
          </p>
          <p>
            <strong>Referral Code:</strong> {user.referralCode}
          </p>
          <p>
            <strong>Last Login:</strong> {user.lastLogin}
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-16">
          <Dropdown title="Wallet Addresses">
            <ul>
              {Object.entries(user.walletAddresses).map(([crypto, address]) => (
                <li key={crypto} className="py-1">
                  <strong>{crypto}:</strong> {address}
                </li>
              ))}
            </ul>
          </Dropdown>

          <Dropdown title="Transactions">
            <ul>
              {user.transactions.map((tx) => (
                <li key={tx.id} className="py-1">
                  <strong>{tx.type}:</strong> {tx.amount} (Date: {tx.date})
                </li>
              ))}
            </ul>
          </Dropdown>

          <Dropdown title="KYC Data">
            <ul>
              {user.kycData.map((kyc) => (
                <li key={kyc.id} className="py-1">
                  <strong>{kyc.document}</strong> (Date: {kyc.date})
                </li>
              ))}
            </ul>
          </Dropdown>

          <Dropdown title="Pending KYC">
            <ul>
              {user.pendingKyc.map((kyc) => (
                <li key={kyc.id} className="py-1">
                  <strong>{kyc.document}</strong> (Date: {kyc.date})
                </li>
              ))}
            </ul>
          </Dropdown>

          <Dropdown title="Device Activity">
            <ul>
              {user.deviceActivity.map((activity) => (
                <li key={activity.id} className="py-1">
                  <strong>{activity.device}</strong> (Date: {activity.date})
                </li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
