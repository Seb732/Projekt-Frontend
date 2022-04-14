$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 800) {
        document.getElementById("navbar").style.cssText = `
            display: inline-flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            padding-left: 0;
            top: 40%;
            position: fixed;
            background-color: #212121;
            border-radius: 0 5px 5px 0;
            box-shadow: 1px 2px 5px rgb(0 0 0 / 50%);
            -webkit-animation: fadeInSide 1s;
            animation: fadeInSide 1s;

            `;
        document.getElementById("nav").style.cssText = ` 
            float:none;
            `;

        document.getElementById("1").innerHTML =
            '<i class="fa fa-fw fa-rocket"></i>';
        document.getElementById("2").innerHTML = '<i class="fa fa-fw fa-book">';
        document.getElementById("3").innerHTML =
            '<i class="fa fa-fw fa-tasks"></i>';
        document.getElementById("4").innerHTML =
            '<i class="fa fa-fw fa-line-chart"></i>';
    } else {
        document.getElementById("navbar").style.cssText = `
            positon: relative;
            -webkit-animation: fadeIn 1s;
            animation: fadeIn 1s;
            `;

        document.getElementById("nav").style.cssText = `
            float: right; `;

        document.getElementById("1").innerHTML = "Cel i funkcje";
        document.getElementById("2").innerHTML = "Historia";
        document.getElementById("3").innerHTML = "Obecnie";
        document.getElementById("4").innerHTML = "Plany";
    }
});
window.addEventListener("scroll", function () {
    var element = document.querySelector("#footer");

    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        document.getElementById("footer_div").style.cssText = `
        -webkit-animation: fadeIn 1s;
        animation: fadeIn 1s;
        `;
    } else {
        document.getElementById("footer_div").style.cssText = `
        opacity:0;
        `;
    }
});

$(document).ready(function () {
  $("#1").click(function () {
      $("html, body").animate(
          {
              scrollTop: $("#container1").offset().top - 100,
          },
          2000
    );
    
  });
  $("#2").click(function () {
      $("html, body").animate(
          {
              scrollTop: $("#container2").offset().top - 100,
          },
          2000
      );
  });
  $("#3").click(function () {
      $("html, body").animate(
          {
              scrollTop: $("#container3").offset().top - 100,
          },
          2000
      );
  });
  $("#4").click(function () {
      $("html, body").animate(
          {
              scrollTop: $("#container4").offset().top - 100,
          },
          2000
      );
  });
});
