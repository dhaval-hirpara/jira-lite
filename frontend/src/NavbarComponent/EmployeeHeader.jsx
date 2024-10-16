import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-employee"));
  console.log(user);

  const employeeLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-employee");
    sessionStorage.removeItem("employee-jwtToken");
    navigate("/");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link
          to="/user/employee/project/all"
          class="nav-link active"
          aria-current="page"
          style={{borderRight: "solid #000000"}}
        >
          <b className="text-color">My Projects</b>
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
          onClick={employeeLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
      {/* <div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    &nbsp;My Profile
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div> */}

    </ul>
  );
};

export default EmployeeHeader;
