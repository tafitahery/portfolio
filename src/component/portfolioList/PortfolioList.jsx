import './portfolioList.scss';

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? 'profolioList active' : 'profolioList'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
