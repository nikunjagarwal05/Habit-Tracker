import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col gap-2">
      404 Page Not Found :(
      <Link to="/">Home From Link</Link>
      <a href="/">Home From A</a>
    </div>
  );
}
