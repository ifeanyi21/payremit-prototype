const users = [
  {
    id: "Pay-123456",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe1234@gmail.com",
    kyc: "LVL2",
    cryptoBalance: {
      BTC: "50.00234",
      TRX: "34.13405",
    },
    ngnBalance: "500000",
    referralCode: "REF12345",
    lastLogin: "2024-07-22 12:34:56",
    walletAddresses: {
      USDT: "address1",
      BTC: "address2",
      TRX: "address3",
      USDC: "address4",
      SOL: "address5",
      TON: "address6",
    },
    transactions: [
      { id: 1, type: "BTC", amount: "0.5", date: "2024-07-21" },
      // Add more transactions here
    ],
    kycData: [
      { id: 1, document: "document1.jpg", date: "2024-07-20" },
      // Add more KYC data here
    ],
    pendingKyc: [
      { id: 1, document: "document2.jpg", date: "2024-07-22" },
      // Add more pending KYC data here
    ],
    deviceActivity: [
      { id: 1, device: "Chrome on Windows", date: "2024-07-22" },
      // Add more device activities here
    ],
  },
  {
    id: "Pay-789012",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarahjohnson5678@yahoo.com",
    kyc: "LVL1",
    cryptoBalance: {
      ETH: "2.45678",
      USDT: "1000.50",
    },
    ngnBalance: "750000",
    referralCode: "REF67890",
    lastLogin: "2024-07-24 09:15:30",
    walletAddresses: {
      ETH: "address7",
      USDT: "address8",
      BNB: "address9",
      ADA: "address10",
      DOT: "address11",
    },
    transactions: [
      { id: 1, type: "ETH", amount: "0.5", date: "2024-07-23" },
      { id: 2, type: "USDT", amount: "100", date: "2024-07-22" },
    ],
    kycData: [{ id: 1, document: "document3.jpg", date: "2024-07-18" }],
    pendingKyc: [{ id: 1, document: "document4.jpg", date: "2024-07-24" }],
    deviceActivity: [
      { id: 1, device: "Safari on MacOS", date: "2024-07-24" },
      { id: 2, device: "Chrome on iOS", date: "2024-07-23" },
    ],
  },
  {
    id: "Pay-345678",
    firstName: "Michael",
    lastName: "Smith",
    email: "michaelsmith9012@outlook.com",
    kyc: "LVL3",
    cryptoBalance: {
      SOL: "100.75",
      DOT: "50.25",
    },
    ngnBalance: "1000000",
    referralCode: "REF34567",
    lastLogin: "2024-07-25 14:45:22",
    walletAddresses: {
      SOL: "address12",
      DOT: "address13",
      LINK: "address14",
      XRP: "address15",
      MATIC: "address16",
    },
    transactions: [
      { id: 1, type: "SOL", amount: "10", date: "2024-07-24" },
      { id: 2, type: "DOT", amount: "5", date: "2024-07-23" },
    ],
    kycData: [
      { id: 1, document: "document5.jpg", date: "2024-07-15" },
      { id: 2, document: "document6.jpg", date: "2024-07-16" },
    ],
    pendingKyc: [],
    deviceActivity: [
      { id: 1, device: "Firefox on Linux", date: "2024-07-25" },
      { id: 2, device: "Edge on Windows", date: "2024-07-24" },
      { id: 3, device: "Chrome on Android", date: "2024-07-23" },
    ],
  },
  {
    id: "Pay-901234",
    firstName: "Emily",
    lastName: "Brown",
    email: "emilybrown5678@hotmail.com",
    kyc: "LVL2",
    cryptoBalance: {
      XRP: "1000.50",
      ADA: "500.25",
    },
    ngnBalance: "250000",
    referralCode: "REF90123",
    lastLogin: "2024-07-23 18:30:45",
    walletAddresses: {
      XRP: "address17",
      ADA: "address18",
      AVAX: "address19",
      ALGO: "address20",
      ATOM: "address21",
    },
    transactions: [
      { id: 1, type: "XRP", amount: "100", date: "2024-07-22" },
      { id: 2, type: "ADA", amount: "50", date: "2024-07-21" },
    ],
    kycData: [{ id: 1, document: "document7.jpg", date: "2024-07-19" }],
    pendingKyc: [
      { id: 1, document: "document8.jpg", date: "2024-07-23" },
      { id: 2, document: "document9.jpg", date: "2024-07-23" },
    ],
    deviceActivity: [
      { id: 1, device: "Chrome on Windows", date: "2024-07-23" },
      { id: 2, device: "Safari on iOS", date: "2024-07-22" },
    ],
  },
  // Add 29 more users here
];

export default users;
