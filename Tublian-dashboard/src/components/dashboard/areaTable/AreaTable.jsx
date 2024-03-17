import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_DATA = [
  {
    id: 100,
    success: "Being bold enough...",
    date: "May 30",
    likes: "1.1k",
    comments: "More",
    image: "https://example.com/image1.jpg", // Example image URL
  },
  {
    id: 101,
    success: "Consistency is key...",
    date: "June 15",
    likes: "2.6k",
    comments: "Great work!",
    image: "https://example.com/image2.jpg", // Example image URL
  },
  {
    id: 102,
    success: "Engage with your audience...",
    date: "July 5",
    likes: "1.5k",
    comments: "Fantastic post!",
    image: "https://example.com/image3.jpg", // Example image URL
  },
  // Add more data items as needed
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Post Activity</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              <th>Success</th>
              <th>Date</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Shares</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((dataItem) => (
              <tr key={dataItem.id}>
                <td className="success-column">
                  <div className="success-image-container">
                    <img src={dataItem.image} alt="Success Image" />
                    <span>{dataItem.success}</span>
                  </div>
                </td>
                <td>{dataItem.date}</td>
                <td>{dataItem.likes}</td>
                <td>{dataItem.comments}</td>
                <td>{dataItem.shares || '-'}</td>
                <td className="dt-cell-action">
                  <AreaTableAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
