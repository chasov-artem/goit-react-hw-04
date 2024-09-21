import "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleChangePage }) => {
  return <button onClick={handleChangePage}>Load More</button>;
};
export default LoadMoreBtn;
