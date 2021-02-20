import Title from "../../../components/placeDetails/titleComponent";
import ImageGallery from "../../../components/placeDetails/imageGalleryComponent";
import CustomButton from "../../../components/placeDetails/customButton";

import homePng from "./media/home.png";
import cleanPng from "./media/clean.png";
import wifiPng from "./media/wifi.png";
import poolPng from "./media/pool.png";
import parkingPng from "./media/parking.png";
import washerPng from "./media/washer.png";
import tvPng from "./media/tv.png";
import kitchenPng from "./media/kitchen.png";
import snowflakePng from "./media/snowflake.png";
import essentialsPng from "./media/essentials.png";
import smokePng from "./media/smokeAlarm.png";
import carbonPng from "./media/carbonAlarm.png";
import "./styles.css";

export default function PlaceDetails() {
  const summary =
    "40m2 one room apartment, living room with sofa, dining table, sound dock, air conditioning, double bed located on the second floor with a domed roof, accessible by a ladder. Open kitchen, washing machine, bathroom with toilet and shower. Shared pool.";

  let amenities = {
    essential: {
      desk_workspace: false,
      iron: false,
      hair_dryer: false,
      shampoo: true,
      closet_drawers: true,
      tv: true,
      heat: false,
      wifi: true,
      breakfast_coffee_tea: false,
      air_conditioning: true,
      fireplace: false,
    },
    safety: {
      smoke_detector: true,
      first_aid_kit: false,
      fire_extinguisher: false,
      lock_on_bedroom_door: false,
    },
    facilities: {
      kitchen: true,
      pool: false,
      parking: true,
      gym: false,
      laundry: false,
      hot_tub: false,
    },
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-white d-flex justify-content-around fixed-top">
        <h5>navbar</h5>
      </nav>

      <Title
        data={{
          title: "El Gouna Cozy lagoon",
          rating: 4.95,
          numOfRaters: 19,
          address: "Hurghada, Red Sea Governorate, Egypt",
        }}
      />

      <ImageGallery
        data={[
          "https://a0.muscache.com/im/pictures/24a785b8-273c-4434-ba06-5a9576e18ad0.jpg?im_w=960",
          "https://a0.muscache.com/im/pictures/6b52442f-0fdd-4b40-a107-4c52487bbdde.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/e1cd5386-74a9-4c58-9b6c-df08fbd8efcc.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/5be07c68-e243-4fa6-9f21-19705a230bcb.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/0f2b4ab0-fbd8-4152-8a3b-a479b834a294.jpg?im_w=720",
        ]}
      />

      <div className="main container d-flex">
        <div className="placeInfo container">
          <div className="d-flex justify-content-between">
            <span>
              <h2>Entire house hosted by Nicole</h2>
              <span className="summarySpan">
                2 guests · Studio · 1 bed · 1 bath
              </span>
            </span>
            <img
              className="hostImg"
              src="https://a0.muscache.com/im/users/31447759/profile_pic/1429522564/original.jpg?im_w=240"
            />
          </div>
          <hr />

          {true ? (
            <div className="placeFeature d-flex">
              <img className="icon" src={homePng} />
              <span>
                <h3>Entire home</h3>
                <span className="FeatureSubtitle">
                  You’ll have the house to yourself.
                </span>
              </span>
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div className="placeFeature d-flex">
              <img className="icon" src={cleanPng} />
              <span>
                <h3>Enhanced Clean</h3>
                <span className="FeatureSubtitle">
                  This host committed to Airbnb&rsquo;s 5-step enhanced cleaning
                  process.
                </span>
              </span>
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div className="placeFeature d-flex">
              <img className="icon" src={wifiPng} />
              <span>
                <h3>Wifi</h3>
                <span className="FeatureSubtitle">
                  Guests often search for this popular amenity.
                </span>
              </span>
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div className="placeFeature d-flex">
              <img className="icon" src={poolPng} />
              <span>
                <h3>Pool</h3>
                <span className="FeatureSubtitle">
                  Guests often search for this popular amenity.
                </span>
              </span>
            </div>
          ) : (
            ""
          )}
          <hr />

          <p className="description">{summary}</p>
          <hr />

          <div className="amenities">
            <h3>Amenities</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="amenityItem">
                  <img className="icon" src={wifiPng} />
                  <span
                    className={amenities.essential.wifi ? "" : "notIncluded"}
                  >
                    Wifi
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={parkingPng} />
                  <span
                    className={
                      amenities.facilities.parking ? "" : "notIncluded"
                    }
                  >
                    Free parking
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={washerPng} />
                  <span
                    className={
                      amenities.facilities.laundry ? "" : "notIncluded"
                    }
                  >
                    Washer
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={snowflakePng} />
                  <span
                    className={
                      amenities.essential.air_conditioning ? "" : "notIncluded"
                    }
                  >
                    Air conditioning
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={smokePng} />
                  <span
                    className={
                      amenities.safety.fire_extinguisher ? "" : "notIncluded"
                    }
                  >
                    Fire extinguisher
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="amenityItem">
                  <img className="icon" src={kitchenPng} />
                  <span
                    className={
                      amenities.facilities.kitchen ? "" : "notIncluded"
                    }
                  >
                    Kitchen
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={poolPng} />
                  <span className={amenities.facilities.pool ? "" : "notIncluded"}>
                    Pool
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={tvPng} />
                  <span className={amenities.essential.tv ? "" : "notIncluded"}>
                    TV
                  </span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={essentialsPng} />
                  <span>Essentials</span>
                </div>

                <div className="amenityItem">
                  <img className="icon" src={carbonPng} />
                  <span
                    className={
                      amenities.safety.smoke_detector ? "" : "notIncluded"
                    }
                  >
                    Smoke alarm
                  </span>
                </div>
              </div>
            </div>

            <CustomButton text="All amenities" />
          </div>
          <hr />
        </div>

        <div className="myDiv"></div>
      </div>
    </>
  );
}
