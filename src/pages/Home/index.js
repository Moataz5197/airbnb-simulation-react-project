import RecommendedCities from '../../components/recommended-cities';
import './styles.css';
const Home = () => {
  return (
    <>
    {/* <div style={{backgroundImage: `url(./assets/imgs/download.png)`}}><h1>hiii</h1></div> */}
      <section className="sec1 container-fluid" style={{backgroundImage: `url(./assets/imgs/download.png)`}}>
        <div className="mainTxt">
          <h1 className="text-light font-weight-bolder text-justify">Go</h1>
          <h1 className="text-light font-weight-bolder text-justify near">Near</h1>

          <a href="search.html">
            <button type="button" className="btn btn-light rounded-lg">
              Explore nearby stays
            </button>
          </a>
        </div>
      </section>

      <section>
        <RecommendedCities/>
      </section>
      <section className="sec3">
        <div className="container mb-4">
          <div className="row ml-1 pb-2">
            <h3>
              <b>Live anywhere</b>
            </h3>
          </div>
          <div className="row pb-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-1.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">Entire homes</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-2.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">Cabins and cottages</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-3.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">Unique stays</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-4.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">Pets welcome</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec4 text-white">
        <div className="container h-100 pb-4">
          <div className="row pb-4 pt-4">
            <h3 className="col-12">
              <b>Experience the world</b>
            </h3>
            <div className="col-12">
              Unique activities with local experts—in person or online.
            </div>
          </div>

          <div className="row pb-4 ">
            <div className="col-12 col-md-4 ">
              <div className="card border border-0">
                <a href="online-experience.html">
                  <img
                    className="card-img-top rounded-lg"
                    src="./assets/imgs/sec4-1.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body p-0 mt-2 ">
                  <h6 className="card-title font-weight-bold mb-0">
                    Online Experiences
                  </h6>
                  <div className="card-text small">
                    Travel the world without leaving home.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card border border-0">
                <a href="host_place.html">
                  <img
                    className="card-img-top rounded-lg"
                    src="./assets/imgs/sec4-2.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title font-weight-bold mb-0">Experiences</h6>
                  <div className="card-text small">
                    Things to do wherever you are.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec4-3.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title font-weight-bold mb-0 ">Adventures</h6>
                  <div className="card-text small">
                    Multi-day trips with meals and stays.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec5 text-white">
        <div className="container-fluid cont1 py-5 h-100">
          <div className="row">
            <div className="col-1 p-0"></div>
            <div className="col-10 p-0">
              <div className="card img-fluid border border-0" style={{width:"100%"}}>
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec5.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-img-overlay mt-5 pl-5">
                  <h1 className="card-title my-0 font-weight-bold">
                    Still after that
                  </h1>
                  <h1 className="card-title mb-3 font-weight-bold">
                    perfect gift?
                  </h1>
                  <p className="card-text pb-2">
                    Surprise them with an Airbnb gift card.
                  </p>
                  <button type="button" className="btn btn-light text-black-50">
                    <b>Learn more</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 p-0"></div>
        </div>
      </section>

      <section className="sec6">
        <div className="container h-100">
          <div className="row pb-4 pt-4">
            <h3 className="col-12">
              <b>Join millions of hosts on Airbnb</b>
            </h3>
          </div>

          <div className="row pb-5">
            <div className="col-12 col-lg-4 ">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec6-1.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">Host your home</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card border border-0">
                <a href="online-experience.html">
                  <img
                    className="card-img-top  rounded-lg"
                    src="./assets/imgs/sec6-2.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body  p-0 mt-2">
                  <h6 className="card-title">Host an Online Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ">
              <div className="card border border-0">
                <a href="host_place.html">
                  <img
                    className="card-img-top  rounded-lg"
                    src="./assets/imgs/sec6-3.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body  p-0 mt-2">
                  <h6 className="card-title">Host an Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
