import { icon } from './Helper'


function Panel({ name }) {
    return (
      <>
        <div className="panelButton"></div>
        <div className="panel">
          <div className="box">
            <p className="panelTitle">{name.value}</p>
            <div className="space"></div>
          </div>
        </div>
      </>
    );
  }
  export default Panel;