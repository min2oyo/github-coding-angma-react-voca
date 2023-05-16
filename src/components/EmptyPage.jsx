import { Link } from "react-router-dom";

const EmptyPage = () => {

  return (
    <div className="EmptyPage">
      <h2>없는 페이지예용~</h2>
      <Link to={-1}>돌아가기</Link>
    </div>
  );
};

export default EmptyPage;