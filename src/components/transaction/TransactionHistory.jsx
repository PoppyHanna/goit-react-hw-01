// import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.css'

// const Transaction = ({ type, amount, currency }) => {
//   return (
//     <tr  className={styles.row}>
//       <td className={styles.cell}>{type}</td>
//       <td className={styles.cell}>{amount}</td>
//       <td className={styles.cell}>{currency}</td>
//     </tr>
//   );
// };

// Transaction.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
// };

// const TransactionHistory = ({ items }) => {
//   return (
//     <table className={styles.table}>
//       <thead >
//         <tr>
//           <th className={styles.header}>Type</th>
//           <th className={styles.header}>Amount</th>
//           <th className={styles.header}>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map((transaction) => (
//           <Transaction
//             key={transaction.id}
//             type={transaction.type}
//             amount={transaction.amount}
//             currency={transaction.currency}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionHistory;

import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>Type</th>
          <th className={styles.header}>Amount</th>
          <th className={styles.header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
