import './CurrentResults.css';

function CurrentResults(props) {
    console.log(props.results.data)
    return (
        <>
          <div className="table-container">
            <table className="table table-dark table-striped rounded">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>Timing</th>
                </tr>
              </thead>
              <tbody>
                {props.results.data &&
                  props.results.data.map((element) => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>{element.time}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </>
      );
}

export default CurrentResults;

