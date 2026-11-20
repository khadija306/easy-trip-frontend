/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import "./Gallery.css";
import Photo_beach_city_nature from "./Photo_beach_city_nature/Photo_beach_city_nature";
import { Available_places_array } from "./Available_places_array";
import { Background_images } from "./Background_images/Background_images_array";
export default function Gallery() {
  /* 


 - gallery_root : 

 this is the root element of gallery app  , it contains 3 parts 
 
 1)'gallery_button_section' which contains buttons to select catagories (default is beach).
  
  2) gallery filter bar and sort bar

  3) 'gallery_box' it is the box where photos will appear
 
  */
  const [photo_index, set_photo_index] = useState(1);
  // index of categories :

  // 1 --> beach , 2 --> city , 3 --> nature

  const [place, set_place] = useState("Any"); // places to go

  const [order, set_order] = useState("none");
  // what property should we sort by

  const [reverse_order, set_reverse_order] = useState(false);
  //  reverse the order of shown images or not

  const [max_price, set_max_price] = useState(1000000);
  // show places that have price up to max_price

  const [min_rate, set_min_rate] = useState(0);
  // minimum rate required

  const [number_of_images, set_num_of_images] = useState(8);
  // number of images to be shown

  const [component, setComponent] = useState(
    <Photo_beach_city_nature
      index={1}
      cnt={number_of_images}
      place={place}
      rate={min_rate}
      price={max_price}
      order={order}
      reverse={reverse_order}
    />
  );
  // the component to be rendered ( default is Beach with index 1).

  let place_options_content = Available_places_array.map((e) => (
    <option title={e} value={e} className="place_options" />
  ));

  // the options of available places to choose from.

  return (
    <>
      <p className="gallery_choose_sentence">Book your Trip:</p>

      <div id="gallery_root">
        <div id="gallery_container_for_filter_button">
          <div id="gallery_add_filter_button" onClick={showFilters}>
            <span> Show Filters </span>
            <i className="fa-solid fa-filter"></i>
          </div>
        </div>
        {/* end of  container_for_filter_button  */}
        <div id="gallery_button_section">
          <button id="gallery_beach_button" onClick={set_beach}>
            Beach{" "}
            <i
              className="fa-solid fa-water"
              style={{ paddingLeft: "5px", fontSize: "20px" }}></i>
          </button>

          <button id="gallery_nature_button" onClick={set_nature}>
            Nature
            <i
              className="fa-solid fa-leaf"
              style={{ paddingLeft: "5px", fontSize: "20px" }}></i>
          </button>

          <button id="gallery_city_button" onClick={set_city}>
            Cities
            <i
              className="fa-solid fa-city"
              style={{ paddingLeft: "5px", fontSize: "20px" }}></i>
          </button>

          <button id="gallery_view_button" onClick={view}>
            <span id="gallery_view_text_content"> View All</span>
            <i
              className="fa-solid fa-bars"
              style={{ paddingLeft: "5px", fontSize: "20px" }}></i>
          </button>
        </div>{" "}
        {/* end of gallery button section*/}
        <div id="gallery_filter_section">
          <div id="gallery_place_filter_section">
            <span>
              Choose a country
              <i
                className="fa-solid fa-earth-asia"
                style={{ paddingLeft: "5px" }}></i>{" "}
              :
              <input
                name="places_options"
                list="gallery_PLACES"
                id="gallery_places_menu"
                placeholder="Any"
                onChange={(e) => change_place(e.target.value)}
              />
              <datalist id="gallery_PLACES">{place_options_content}</datalist>
            </span>
            <p
              id="gallery_asc_desc_order"
              onClick={() => change_order(reverse_order)}>
              Reverse Order
            </p>
          </div>{" "}
          {/*end of place filter section*/}
          <div id="gallery_price_filter_bar">
            <p className="gallery_filter_word_and_icon">
              price <i className="fa-solid fa-coins"></i> :
            </p>

            <span
              id="gallery_any_price"
              onClick={() => change_price(100000, "gallery_any_price")}>
              any
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="less200" onClick={() => change_price(200, "less200")}>
              less than 200
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="less400" onClick={() => change_price(400, "less400")}>
              less than 400
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="less800" onClick={() => change_price(800, "less800")}>
              less than 800
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="less1000" onClick={() => change_price(1000, "less1000")}>
              less than 1000
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>
          </div>
          {/* end of price filter */}
          <div id="gallery_rate_filter_bar">
            <p className="gallery_filter_word_and_icon">
              rate <i className="fa-solid fa-star"></i> :
            </p>

            <span
              id="gallery_any_rate"
              onClick={() => change_rate(0, "gallery_any_rate")}>
              any
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="star1" onClick={() => change_rate(1, "star1")}>
              1 star
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="star2" onClick={() => change_rate(2, "star2")}>
              2 stars
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="star3" onClick={() => change_rate(3, "star3")}>
              3 stars
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="star4" onClick={() => change_rate(4, "star4")}>
              4 stars
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="star5" onClick={() => change_rate(5, "star5")}>
              5 stars
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>
          </div>
          {/* end of rate filter */}
          <div id="gallery_sort_bar">
            <div id="gallery_sort_word">
              sort by <i className="fa-solid fa-sort"> </i> :
            </div>

            <span id="gallery_none" onClick={() => Sort("gallery_none")}>
              None
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>
            <span
              id="gallery_alphabetical"
              onClick={() => Sort("Alphabetical")}>
              Alphabetical
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="gallery_sort_price" onClick={() => Sort("Price")}>
              Price
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>

            <span id="gallery_sort_rate" onClick={() => Sort("Rate")}>
              Rate
              <i
                className="fa-solid fa-check"
                style={{
                  color: "#222",
                  paddingLeft: "5px",
                  fontSize: "20px",
                }}></i>
            </span>
            <span id="gallery_sort_flex_none"></span>
          </div>{" "}
          {/*end of gallery sort bar */}
        </div>
        {/*end of gallery filter bar */}
        <div id="gallery_box">{component}</div>
      </div>
    </>
  );

  // to show (8 or all ) photos.

  function view() {
    let new_number = 0;
    clear_desc();
    if (number_of_images === 8) {
      new_number = 1000000; // any large number > num of photos

      document.getElementById("gallery_view_text_content").textContent =
        "View Less";

      setComponent(
        <Photo_beach_city_nature
          index={photo_index}
          cnt={new_number}
          place={place}
          price={max_price}
          rate={min_rate}
          order={order}
          reverse={reverse_order}
        />
      );

      set_num_of_images(new_number);
    } else {
      new_number = 8;

      setComponent(
        <Photo_beach_city_nature
          index={photo_index}
          cnt={new_number}
          place={place}
          price={max_price}
          rate={min_rate}
          order={order}
          reverse={reverse_order}
        />
      );
      document.getElementById("gallery_view_text_content").textContent =
        "View All";
      set_num_of_images(new_number);
    }
  }

  function set_beach() {
    clear_desc();
    set_photo_index(1);

    document.documentElement.style.setProperty(
      "--filter_bar_color",
      "linear-gradient(50deg ,  #8db1cb   ,#a1baca     ,#abd6ee  ,  #d6eaf0  )"
    );

    document.getElementById("Footer_root_element").style.backgroundImage =
      " linear-gradient(50deg ,  #133c59   ,#4a8a98     ,#3e98ca  ,  #93d8ec  )";
    document.getElementById("footer_site-photo").style.backgroundColor =
      "#4a8a98";
    /*  edit style of buttons */
    document.getElementById("gallery_beach_button").style.backgroundColor =
      "rgb(255 , 255 , 255 ,0.2)";

    document.getElementById("gallery_nature_button").style.backgroundColor =
      "transparent";
    document.getElementById("gallery_city_button").style.backgroundColor =
      "transparent";

    /* end of edit style of buttons */
    document.getElementById("gallery_view_text_content").textContent =
      "View All";
    document.getElementById("gallery_asc_desc_order").style.backgroundColor =
      "transparent";
    document.getElementById("gallery_box").style.animationName = "rotate";
    document.getElementById("gallery_root").style.animationName = "beach";
    setTimeout(
      () =>
        (document.getElementById(
          "gallery_root"
        ).style.backgroundImage = ` url("${Background_images[0].img}")`),
      1020
    );
    let arr = [
      "gallery_sort_price",
      "gallery_sort_rate",
      "gallery_alphabetical",
    ];
    for (let i = 0; i < 3; i++) {
      document.querySelector(`#${arr[i]} i`).style.display = "none";
    }
    setComponent(
      <Photo_beach_city_nature
        index={1}
        cnt={8}
        place={place}
        price={max_price}
        rate={min_rate}
        order={order}
        reverse={false}></Photo_beach_city_nature>
    );
    set_num_of_images(8);
    set_reverse_order(false);
  }
  function set_nature() {
    clear_desc();

    document.getElementById("Footer_root_element").style.backgroundImage =
      "linear-gradient(50deg ,  rgb(38, 81, 24)   ,#4a9852     ,#3eca48  ,  #93ec93  )";

    document.documentElement.style.setProperty(
      "--filter_bar_color",
      "   linear-gradient(50deg , rgb(148, 203, 141)   ,#a8caa1     ,#b8eeab  ,  #daf0d6  )"
    );

    document.getElementById("footer_site-photo").style.backgroundColor =
      "#50984a";

    set_photo_index(2);

    document.getElementById("gallery_nature_button").style.backgroundColor =
      "rgb(255 , 255 , 255 ,0.2)";
    document.getElementById("gallery_beach_button").style.backgroundColor =
      "transparent";
    document.getElementById("gallery_city_button").style.backgroundColor =
      "transparent";

    document.getElementById("gallery_view_text_content").textContent =
      "View All";
    document.getElementById("gallery_asc_desc_order").style.backgroundColor =
      "transparent";
    document.getElementById("gallery_box").style.animationName = "rotate2";
    document.getElementById("gallery_root").style.animationName = "nature";
    setTimeout(
      () =>
        (document.getElementById(
          "gallery_root"
        ).style.backgroundImage = ` url("${Background_images[1].img}")`),
      1020
    );

    let arr = [
      "gallery_sort_price",
      "gallery_sort_rate",
      "gallery_alphabetical",
    ];
    for (let i = 0; i < 3; i++) {
      document.querySelector(`#${arr[i]} i`).style.display = "none";
    }

    setComponent(
      <Photo_beach_city_nature
        index={2}
        cnt={8}
        place={place}
        price={max_price}
        rate={min_rate}
        order={order}
        reverse={false}></Photo_beach_city_nature>
    );
    set_num_of_images(8);
    set_reverse_order(false);
  }

  function set_city() {
    clear_desc();
    set_photo_index(3);

    document.getElementById("Footer_root_element").style.backgroundImage =
      "  linear-gradient(50deg ,  #1e2122   ,#535658     ,#6f8689  ,  #b2b5b8  )";

    document.documentElement.style.setProperty(
      "--filter_bar_color",
      "linear-gradient(50deg , rgb(163, 163, 163)   ,#adadad     ,#d2d5d1  ,  #d5d5d5  )"
    );

    document.getElementById("footer_site-photo").style.backgroundColor =
      "#5d5d5d";
    document.getElementById("gallery_city_button").style.backgroundColor =
      "rgb(255 , 255 , 255 ,0.2)";
    document.getElementById("gallery_beach_button").style.backgroundColor =
      "transparent";
    document.getElementById("gallery_nature_button").style.backgroundColor =
      "transparent";

    document.getElementById("gallery_view_text_content").textContent =
      "View All";
    document.getElementById("gallery_asc_desc_order").style.backgroundColor =
      "transparent";
    document.getElementById("gallery_root").style.animationName = "city";
    setTimeout(
      () =>
        (document.getElementById(
          "gallery_root"
        ).style.backgroundImage = ` url("${Background_images[2].img}")`),
      1020
    );

    document.getElementById("gallery_box").style.animationName = "rotate3";

    let arr = [
      "gallery_sort_price",
      "gallery_sort_rate",
      "gallery_alphabetical",
    ];
    for (let i = 0; i < 3; i++) {
      document.querySelector(`#${arr[i]} i`).style.display = "none";
    }
    setComponent(
      <Photo_beach_city_nature
        index={3}
        cnt={8}
        place={place}
        price={max_price}
        rate={min_rate}
        order={order}
        reverse={false}></Photo_beach_city_nature>
    );
    set_num_of_images(8);
    set_reverse_order(false);
  }

  // shows/hides the filter bar and change the text content of "show filter" button

  function showFilters() {
    let curr = document.getElementById("gallery_filter_section").style.display;
    if (curr === "flex") {
      document.getElementById("gallery_add_filter_button").innerHTML = `
          Show Filters 
          <i class="fa-solid fa-filter"></i> `;
      document.getElementById("gallery_filter_section").style.animationName =
        "hide_filter";
      setTimeout(() => {
        document.getElementById("gallery_filter_section").style.display =
          "none";
      }, 500);
      /// hide filter bar
    } else {
      // show filter bar
      document.getElementById("gallery_filter_section").style.display = "flex";
      document.getElementById("gallery_filter_section").style.animationName =
        "show_filter";

      document.getElementById(
        "gallery_add_filter_button"
      ).innerHTML = `Hide Filters  <i class="fa-solid fa-filter"></i> `;
    }
  }

  function change_place(e) {
    clear_desc();
    if (e === "") e = "Any";

    set_place(e);

    setComponent(
      <Photo_beach_city_nature
        index={photo_index}
        place={e}
        price={max_price}
        rate={min_rate}
        cnt={number_of_images}
        order={order}
        reverse={reverse_order}
      />
    );
  }

  function change_price(price, id) {
    clear_desc();
    let con = document.querySelectorAll("#gallery_price_filter_bar span");

    for (let j = 0; j < con.length; j++) {
      if (con[j].id !== id)
        document.querySelector(`#${con[j].id}  i`).style.display = "none";
      else document.querySelector(`#${con[j].id}  i`).style.display = "initial";
    }

    setComponent(
      <Photo_beach_city_nature
        index={photo_index}
        place={place}
        price={price}
        rate={min_rate}
        cnt={number_of_images}
        order={order}
        reverse={reverse_order}
      />
    );

    set_max_price(price);
  }

  function change_rate(rate, id) {
    let con = document.querySelectorAll("#gallery_rate_filter_bar span");
    clear_desc();
    for (let j = 0; j < con.length; j++) {
      if (con[j].id !== id)
        document.querySelector(`#${con[j].id}  i`).style.display = "none";
      else document.querySelector(`#${con[j].id}  i`).style.display = "initial";

      document.querySelector(`#${con[j].id}  i`).style.color = "#222";
    }

    setComponent(
      <Photo_beach_city_nature
        index={photo_index}
        place={place}
        price={max_price}
        rate={rate}
        cnt={number_of_images}
        order={order}
        reverse={reverse_order}
      />
    );

    set_min_rate(rate);
  }
  function Sort(item) {
    clear_desc();
    let arr = [
      "gallery_sort_price",
      "gallery_sort_rate",
      "gallery_alphabetical",
      "gallery_none",
    ];
    for (let i = 0; i < 4; i++) {
      document.querySelector(`#${arr[i]} i`).style.display = "none";
    }
    let dis = "";
    if (item === "Price") dis = "gallery_sort_price";
    if (item === "Rate") dis = "gallery_sort_rate";
    if (item === "Alphabetical") dis = "gallery_alphabetical";
    if (item === "gallery_none") dis = "gallery_none";
    document.querySelector(`#${dis} i`).style.display = "initial";
    set_order(item);

    setComponent(
      <Photo_beach_city_nature
        index={photo_index}
        place={place}
        price={max_price}
        rate={min_rate}
        cnt={number_of_images}
        order={item}
        reverse={reverse_order}
      />
    );
  }

  function change_order(type) {
    clear_desc();
    let v = false;
    if (reverse_order) {
      set_reverse_order(false);
      document.getElementById("gallery_asc_desc_order").style.backgroundColor =
        "transparent";
    } else {
      v = true;
      document.getElementById("gallery_asc_desc_order").style.backgroundColor =
        "rgba(80, 89, 89, 0.416)";
      set_reverse_order(true);
    }
    setComponent(
      <Photo_beach_city_nature
        index={photo_index}
        cnt={number_of_images}
        place={place}
        price={max_price}
        rate={min_rate}
        order={order}
        reverse={v}></Photo_beach_city_nature>
    );
  }

  function clear_desc() {
    let arr = document.querySelectorAll('[class^="rev_photo_description"]');
    let arr2 = document.querySelectorAll('[class ^="more_info"]');
    let arr3 = document.querySelectorAll('[class ^="photo_description"]');

    for (let i = 0; i < arr.length; i++) {
      arr[i].style.transform = "none";

      arr2[i].innerHTML =
        '<span>more info <i class="fa-solid fa-circle-info"></i> </span>';
      arr3[i].style.backfaceVisibility = "hidden";

      arr[i].style.backfaceVisibility = "visible";
    }
  }
}
