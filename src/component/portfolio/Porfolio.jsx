import './portfolio.scss';

export default function Porfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/16/12/29/mockup-847643_960_720.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/16/12/29/mockup-847643_960_720.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/16/12/29/mockup-847643_960_720.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/16/12/29/mockup-847643_960_720.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/16/12/29/mockup-847643_960_720.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/16/12/29/mockup-847643_960_720.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
