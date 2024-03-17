import styles from './TransactionHistory.module.css'

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr  className={styles.row}>
      <td className={styles.cell}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({items}) => {
  return (
    <table className={styles.table}>
      <thead >
        <tr>
          <th className={styles.header}>Type</th>
          <th className={styles.header}>Amount</th>
          <th className={styles.header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transactions) => (
          <Transaction
            key={transactions.id}
            type={transactions.type}
            amount={transactions.amount}
            currency={transactions.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

