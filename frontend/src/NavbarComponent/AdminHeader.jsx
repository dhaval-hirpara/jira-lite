import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    navigate("/");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          to="/user/manager/register"
          className="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">Register Manager</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/admin/project/add"
          class="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">Add Project</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/admin/project/all"
          class="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">Projects</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/admin/manager/all"
          class="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">Managers</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/employee/all"
          class="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">Employees</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/change/password"
          className="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">Change Password</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
