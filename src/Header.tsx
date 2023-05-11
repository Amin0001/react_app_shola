import image1 from "./image/new1.jpg";
import image2 from "./image/new2.jpg";
import image3 from "./image/new3.jpg";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Diza Fashion</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kids
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Collection
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Senator Materials
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Lace
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ankara
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <hr className="divider"></hr>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                width="70vw"
                height="80vh"
                className="d-block w-100"
                alt="styles"
              />
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>Styles</h5>
                <p>
                  Style is a way to say who you are without having to speak.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                width="70vw"
                height="80vh"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>Fashion</h5>
                <p>
                  Fashion is like eating, you shouldn't stick to the same menu.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                width="70vw"
                height="80vh"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>Clothes</h5>
                <p>Clothes mean nothing until someone lives in them.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="Quote">
          <h3>
            Level Up Your Style With
            <span className="bold">
              <i>Diza Fashion</i>
            </span>
          </h3>
        </div>
      </header>
    </>
  );
}

export default Header;
