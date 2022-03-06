// import doctor from "../../images/dentist-clinic.svg";
import doctor from "../../images/13053.jpg";

const Slider = () => {
  return (
    <div className="container mt-3 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-5 col-sm-12">
          <h1 className="header h1 mt-10 fw-bold">Hi there,</h1>
          <h2 className="header h1 fw-bold">Welcome to ProDenti</h2>
          <p className="header">
            We will provide a full scope of dental service in Bangladesh. Skilled professional of dental doctor. Please visit our website to know more and find our cool services.
          </p>
          <button
            type="button"
            className="btn btn-dark header-btn rounded-pill"
          >
            Know more
          </button>
        </div>
        <div className="col-md-7 col-sm-12">
          <img src={doctor} className="img-fluid" alt="doctor" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
