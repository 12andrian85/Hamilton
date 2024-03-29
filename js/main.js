
const splideNews = document.querySelector('#news')
const splideBanner = document.querySelector('#banner')
const splidePopular = document.querySelector('#popular')
const splidePartners = document.querySelector('#partners')
const splideGallery = document.querySelector('#gallery')
const splideSugestion = document.querySelector('#sugestion')
const splideProperties = document.querySelector('#properties')

var slider = document.getElementById("rate")
var output = document.getElementById("value")

var works = document.getElementById("work")
var ranges = document.getElementById("work-value")

var client = document.getElementById("client")
var clientValue = document.getElementById("client-value")
// // rate
if (slider) {

  output.innerHTML = slider.value;
  slider.oninput = function () {
    
    output.innerHTML = this.value;
  }
}
// // work
if (works) {

  ranges.innerHTML = works.value;
  works.oninput = function () {
    
    ranges.innerHTML = this.value;
  }
}
// // client
if (client) {

  clientValue.innerHTML = client.value;
  client.oninput = function () {
    
    clientValue.innerHTML = this.value;
  }
}


if (splideBanner) {

  new Splide('#banner', {
    direction: 'ttb',
    heightRatio: 0.99,
    // width: '95%',
    type: 'loop',

    wheel: "true",
    height: 400,
  }).mount();

}


if (splidePopular) {

  new Splide('#popular', {
    type: 'loop',
    perPage: 3,
    // autoplay: 'true',
    focus: 'center',
    arrows: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      // 1200: {
      //   perPage: 3,
      // },
      2560: {
        perPage: 3,
      },
    }
  }).mount();
}

if (splidePartners) {

  new Splide('#partners', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    // arrows: true,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 5,
      },
      2560: {
        perPage: 5,
      },
    }
  }).mount();
}


if (splideNews) {

  new Splide('#news', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 5,
      },
      2560: {
        perPage: 5,
      },
    }
  }).mount();
}

if (splideGallery) {

  new Splide('#gallery', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    arrows: 'false',
    breakpoints: {
      // 640: {
      //   perPage: 1,
      // },
      // 768: {
      //   perPage: 3,
      // },
      // 1200: {
      //   perPage: 5,
      // },
      2560: {
        perPage: 1,
      },
    }
  }).mount();
}

if (splideSugestion) {

  new Splide('#sugestion', {
    type: 'loop',
    perPage: 3,
    // focus: 'center',
    arrows: 'true',
    breakpoints: {
      640: {
        perPage: 1,
      },
      // 768: {
      //   perPage: 3,
      // },
      // 1200: {
      //   perPage: 5,
      // },
      2560: {
        perPage: 2,
      },
    }
  }).mount();
}

if (splideProperties) {

  new Splide('#properties', {
    type: 'loop',
    perPage: 3,
    // autoplay: 'true',
    focus: 'center',
    // arrows: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      // 1200: {
      //   perPage: 3,
      // },
      2560: {
        perPage: 3,
      },
    }
  }).mount();
}



