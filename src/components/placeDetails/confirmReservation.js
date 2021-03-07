import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Redirect, Link } from "react-router-dom";
import ReactPayPal from "../paypal/reactPayPal";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { axiosInstance } from "../../axiosInstance";
import { useSelector } from "react-redux";
import "./confirmReservation.css";

export default function ConfirmReservation() {
  const location = useLocation();
  const [checkout, setCheckout] = useState(false);
  const [modal, setModal] = useState(false);
  const user = useSelector((state) => state.user.profile);
  const handleCheckout = (data) => {
    setCheckout(data);
  }


  const handleConfirmReservation = async () => {
     const response = await axiosInstance.post(
        'add/new',
        {
          user_id: user._id, 
          host_id: location.state.data.user_id,
          place_id: location.state.data._id,
          start_date: location.state.calendar.startDate,
          end_date: location.state.calendar.endDate,
          price: location.state.data.price_per_night,
          number_of_nights: location.state.daysRange,
          receipt: {
            subTotal: location.state.receipt.subTotal,
            serviceFee: location.state.receipt.serviceFee,
            total: location.state.receipt.total
          }
        }
        );
        console.log("response:", response);
  }

  if (location.state) {
    return (
      <>
        <div className="d-flex header container">
          <Link
            className="backIconContainer"
            to={{
              pathname: "/placedetails",
              state: { id: location.state.data._id },
            }}
          >
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
          </Link>
          <h1>Confirm your reservation</h1>
        </div>

        <div className="container d-flex">
          <div className="paymentInfo container">
            <div className="tripInfo">
              <h2>Your trip</h2>
              <h3>Dates</h3>
              <p>
                {location.state.calendar.startDate.toDateString().slice(4)} – –
                {" " + location.state.calendar.endDate.toDateString().slice(4)}
              </p>
              <h3>Guests</h3>
              <p>
                {location.state.numOfGuests}{" "}
                {location.state.numOfGuests > 1 ? " guests" : " guest"}
              </p>
            </div>
            <hr />

            <div className="d-flex justify-content-between">
              <h2>Pay with</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="-18.537885 -7.5445 160.66167 45.267"
              >
                <path
                  d="M46.211 6.749h-6.839a.95.95 0 00-.939.802l-2.766 17.537a.57.57 0 00.564.658h3.265a.95.95 0 00.939-.803l.746-4.73a.95.95 0 01.938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 01.563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 00-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.562.66h2.95a.95.95 0 00.939-.803l1.77-11.209a.568.568 0 00-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 00-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 00-.912-.678h-3.234a.57.57 0 00-.541.754l3.625 10.638-3.408 4.811a.57.57 0 00.465.9h3.287a.949.949 0 00.781-.408l10.946-15.8a.57.57 0 00-.468-.895z"
                  fill="#253B80"
                />
                <path
                  d="M94.992 6.749h-6.84a.95.95 0 00-.938.802l-2.766 17.537a.569.569 0 00.562.658h3.51a.665.665 0 00.656-.562l.785-4.971a.95.95 0 01.938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 01.562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 00-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.564.66h2.949a.95.95 0 00.938-.803l1.771-11.209a.571.571 0 00-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219l-2.807 17.858a.569.569 0 00.562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 00-.562-.659h-3.16a.571.571 0 00-.562.482z"
                  fill="#179BD7"
                />
                <path
                  d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 01.314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 011.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 01-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 00-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 01-.096.035z"
                  fill="#253B80"
                />
                <path
                  d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 00.695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 00-1.336-1.03z"
                  fill="#179BD7"
                />
                <path
                  d="M21.754 7.151a9.757 9.757 0 00-1.203-.267 15.284 15.284 0 00-2.426-.177h-7.352a1.172 1.172 0 00-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 011.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 00-1.017-.429 9.045 9.045 0 00-.277-.087z"
                  fill="#222D65"
                />
                <path
                  d="M9.614 7.699a1.169 1.169 0 011.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 011.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 00.795.932h5.791l1.454-9.225z"
                  fill="#253B80"
                />
              </svg>
            </div>
            <p>Log in to use PayPal.</p>
            <div
              onClick={() => {
                setModal(!modal);
              }}
              className="checkout-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="-18.537885 -7.5445 160.66167 45.267"
                className="btnSvg"
              >
                <path
                  d="M46.211 6.749h-6.839a.95.95 0 00-.939.802l-2.766 17.537a.57.57 0 00.564.658h3.265a.95.95 0 00.939-.803l.746-4.73a.95.95 0 01.938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 01.563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 00-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.562.66h2.95a.95.95 0 00.939-.803l1.77-11.209a.568.568 0 00-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 00-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 00-.912-.678h-3.234a.57.57 0 00-.541.754l3.625 10.638-3.408 4.811a.57.57 0 00.465.9h3.287a.949.949 0 00.781-.408l10.946-15.8a.57.57 0 00-.468-.895z"
                  fill="white"
                />
                <path
                  d="M94.992 6.749h-6.84a.95.95 0 00-.938.802l-2.766 17.537a.569.569 0 00.562.658h3.51a.665.665 0 00.656-.562l.785-4.971a.95.95 0 01.938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 01.562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 00-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.564.66h2.949a.95.95 0 00.938-.803l1.771-11.209a.571.571 0 00-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219l-2.807 17.858a.569.569 0 00.562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 00-.562-.659h-3.16a.571.571 0 00-.562.482z"
                  fill="white"
                />
                <path
                  d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 01.314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 011.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 01-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 00-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 01-.096.035z"
                  fill="#d8d8d8"
                />
                <path
                  d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 00.695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 00-1.336-1.03z"
                  fill="#d8d8d8"
                />
                <path
                  d="M21.754 7.151a9.757 9.757 0 00-1.203-.267 15.284 15.284 0 00-2.426-.177h-7.352a1.172 1.172 0 00-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 011.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 00-1.017-.429 9.045 9.045 0 00-.277-.087z"
                  fill="#e4e4e4"
                />
                <path
                  d="M9.614 7.699a1.169 1.169 0 011.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 011.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 00.795.932h5.791l1.454-9.225z"
                  fill="white"
                />
              </svg>
            </div>
            <Modal
              isOpen={modal}
              toggle={() => setModal(!modal)}
              centered
              scrollable
              size="lg"
              contentClassName="ModalStyle"
            >
              <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>
              <ModalBody>
                <ReactPayPal
                  onCheckout={handleCheckout}
                  receipt={location.state.receipt}
                />
              </ModalBody>
            </Modal>
            <hr className="mt-4" />
            {checkout ? (
              <p className="mt-4 text-success">
                Payment successful, please press confirm!
              </p>
            ) : (
              <p className="mt-4">
                Please pay first to be able to confirm your reservation.
              </p>
            )}
            <button
              disabled={!checkout}
              onClick={handleConfirmReservation}
              className={checkout ? "confirmButton" : "disabled"}
            >
              Confirm reservation
            </button>
          </div>

          <div className="resInfo container">
            <div className="d-flex placeDetails">
              <img src={location.state.data.images.main_img} />
              <div className="placeData">
                <h1>
                  {location.state.data.space_allowed.private_room
                    ? "Private room"
                    : location.state.data.space_allowed.shared_room
                    ? "Shared room"
                    : "Entire house"}{" "}
                  in {location.state.data.address.city}
                </h1>
                <p>{location.state.data.title}</p>
                <span>
                  {location.state.data.num_beds}{" "}
                  {location.state.data.num_beds > 1 ? " beds" : " bed"} ·{" "}
                  {location.state.data.total_bathrooms}{" "}
                  {location.state.data.total_bathrooms>1? " baths": " bath"}
                </span>
                <div>
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                  <span className="rating">4.95</span>
                  <span className="number"> (19 reviews)</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="priceDetails">
              <h1>Price details</h1>
              <div className="receiptItem d-flex justify-content-between">
                <span>
                  ${location.state.data.price_per_night} x{" "}
                  {location.state.daysRange} nights
                </span>
                <span>${location.state.receipt.subTotal}</span>
              </div>
              <div className="receiptItem d-flex justify-content-between">
                <span>Service fee</span>
                <span>${location.state.receipt.serviceFee}</span>
              </div>
              <div className="receiptTotal d-flex justify-content-between">
                <span>Total (USD)</span>
                <span>${location.state.receipt.total}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/404" />;
  }
}
