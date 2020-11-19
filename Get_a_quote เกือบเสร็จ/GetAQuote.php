<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="formScript.js"></script>
    <link rel="shortcut icon" type="image/x-icon" href="https://thisisneat.com.au/wp-content/themes/neat/shared/img/favicon-avatar.png">
    <title>Get A Quote </title>
</head>
<style>
    body {
        font-family: "Lato", sans-serif;
    }

    .sidebar {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    /* .sidebar a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidebar a:hover {
        color: #f1f1f1;
    } */

    .sidebar .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    .openbtn {
        font-size: 20px;
        cursor: pointer;
        background-color: #111;
        color: white;
        padding: 10px 15px;
        border: none;
    }

    .openbtn:hover {
        background-color: #444;
    }

    #main {
        transition: margin-left .5s;
        padding: 16px;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidebar {
            padding-top: 15px;
        }

        .sidebar a {
            font-size: 18px;
        }
    }
</style>

<body>
    <div class="body_all">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 830px; height:auto;">
            <div class="card-body" style="padding:30px;">
                <p class="card-header-mystyle" style="margin:0px;">
                    Get a Quote
                </p>
                <p class="card-content">
                    Let us know the details of your property and<br>we’ll provide you with an
                    instant end of lease cleaning quote.
                </p>
                <div class="row mt-5">
                    <div class="col-md-4">
                        <p class="card-selection" style="margin:0px;">
                            Property <br>
                        </p>
                        <p class="card-selection-lighter" style="margin-bottom: 0px;">
                            All properties must be<br>
                        </p>
                        <p class="card-selection-lighter" style="font-weight: bold;">
                            <span style="background-color: rgb(255, 255, 87);">&nbspunfurnished</span>
                        </p>
                        <!-- <p class="card-selection-lighter">.</p> -->
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mt-auto mb-auto">
                        <input type="radio" class="custom-control-input" id="customRadio1" name="btn">
                        <label class="custom-control-label card-selection-lighter" for="customRadio1">Studio</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mt-auto mb-auto">
                        <input type="radio" class="custom-control-input" id="customRadio2" name="btn">
                        <label class="custom-control-label card-selection-lighter" for="customRadio2">Apartment</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mt-auto mb-auto">
                        <input type="radio" class="custom-control-input" id="customRadio3" name="btn">
                        <label class="custom-control-label card-selection-lighter" for="customRadio3">House</label>
                    </div>
                </div>
                <hr>

                <div class="row mt-5">
                    <div class="col-md-4">
                        <p class="card-selection-lighter" style="margin:0px;">
                            Rooms<br>
                        </p>
                        <p class="card-selection-lighter" style="margin-bottom: 0px;">
                            Other rooms should include any<br>
                        </p>
                        <p class="card-selection-lighter" style="font-weight: bold;">
                            <span style="background-color: rgb(255, 255, 87);">&nbspdining, family, sun, or study <br> rooms.</span>
                        </p>
                    </div> 
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-4 center-element">
                                <p class="card-selection-lighter">Bedroom</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary " id="minus" onclick="minus()" >
                                        <input type="radio" name="options" id="option1" autocomplete="off" checked> -
                                    </label>
                                    <label class="btn btn-secondary" style="width:80px;" id="shownum">
                                        0
                                    </label>
                                    <label class="btn btn-secondar" id="plus" onclick="plus()">
                                        <input type="radio" name="options" id="option3" autocomplete="off"> +
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <p class="card-selection-lighter">Other</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary " id="minus" onclick="minus2()">
                                        <input class="text-light" type="radio" name="options" id="option1" autocomplete="off" checked> -
                                    </label>
                                    <label class="btn btn-secondary" style="width:80px;" id="shownum2">
                                        0
                                    </label>
                                    <label class="btn btn-secondar" id="plus" onclick="plus2()">
                                        <input  type="radio" name="options" id="option3" autocomplete="off"> +
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <p class="card-selection-lighter ">Bathroom</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary " id="minus" onclick="minus3()">
                                        <input type="radio" name="options" id="option1" autocomplete="off" checked> -
                                    </label>
                                    <label class="btn btn-secondary" style="width:80px;" id="shownum3">
                                        0
                                    </label>
                                    <label class="btn btn-secondar" id="plus" onclick="plus3()">
                                        <input type="radio" name="options" id="option3" autocomplete="off"> +
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>

                <div class="row mt-5">
                    <div class="col-md-4">
                        <p class="card-selection" style="margin:0px;">
                        Amenities<br>
                        </p>
                        <p class="card-selection-lighter" style="margin-bottom: 0px;">
                            Balconies include<span style="background-color: rgb(255, 255, 87);font-weight: bold;">&nbsp  1 set of sliding doors.</span>
                            Additional entrances should be considered as separate balconies.
                        </p>
                    </div> 
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-4">
                                <p class="card-selection-lighter">Laundry</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary " id="minus" onclick="minus4()">
                                        <input class="text-light" type="radio" name="options" id="option1" autocomplete="off" checked> -
                                    </label>
                                    <label class="btn btn-secondary" style="width:80px;" id="shownum4">
                                        0
                                    </label>
                                    <label class="btn btn-secondar" id="plus" onclick="plus4()">
                                        <input  type="radio" name="options" id="option3" autocomplete="off"> +
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <p class="card-selection-lighter">Balcony</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary " id="minus" onclick="minus5()">
                                        <input type="radio" name="options" id="option1" autocomplete="off" checked> -
                                    </label>
                                    <label class="btn btn-secondary" style="width:80px;" id="shownum5">
                                        0
                                    </label>
                                    <label class="btn btn-secondar" id="plus" onclick="plus5()">
                                        <input type="radio" name="options" id="option3" autocomplete="off"> +
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <p class="card-selection-lighter">Garage</p>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-secondary " id="minus" onclick="minus6()">
                                        <input type="radio" name="options" id="option1" autocomplete="off" checked> -
                                    </label>
                                    <label class="btn btn-secondary" style="width:80px;" id="shownum6">
                                        0
                                    </label>
                                    <label class="btn btn-secondar" id="plus" onclick="plus6()">
                                        <input type="radio" name="options" id="option3" autocomplete="off"> +
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>

                <!-- Extras -->
                <!-- row1 -->
                <div class="row">
                    <div class="col-md-4">
                        <p class="card-selection" style="margin:0px;">
                            Extras <br>
                        </p>
                        <p class="card-selection-lighter" style="margin-bottom: 0px; width:90%;">
                            Although these requests are optional, you should still check with your real estate agent about the
                            <b style="font-weight: bold;">end of lease &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cleaning</b>
                            requirements of your home.
                        </p>

                    </div>
                    <div class="col-md-8">
                        <div class="row" style="height:100%;">
                            <!-- ช่อง 1 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row">
                                        <img src="1.png" alt="" style="margin-left: 30%; margin-top:10%">
                                        <input type="checkbox" id="check1" name="check1" style="margin-left: 1%; margin-top:4%; width:2.5vw; height:2.5vh;">
                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 10%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Carpet steam clean</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">entire property</p>
                                    </div>
                                </div>
                            </div>
                            <!-- ช่อง 2 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row">
                                        <img src="2.png" alt="" style="margin-left: 30%; margin-top:10%">

                                        <input type="checkbox" id="check2" name="check2" style="margin-left: 1%; margin-top:4%; width:2.5vw; height:2.5vh;">

                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 11%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Wall wash</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">entire property</p>
                                    </div>
                                </div>
                            </div>

                            <!-- ช่อง 3 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;" onmouseover="swap()" onmouseout="swap2()">
                                    <div class="row" id="hide-item">
                                        <img src="3.png" alt="" style="margin-left: 30%; margin-top:10%">
                                    </div>
                                    <div class="row" id="hover-item">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-secondary " id="minus" onclick="minus7()">
                                                    <input class="text-light" type="radio" name="options" id="option1" autocomplete="off" checked> -
                                                </label>
                                                <label class="btn btn-secondary" style="width:60px;" id="shownum7">
                                                    0
                                                </label>
                                                <label class="btn btn-secondar" id="plus" onclick="plus7()">
                                                    <input  type="radio" name="options" id="option3" autocomplete="off"> +
                                                </label>
                                        </div>
                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 6%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Blind deep clean</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">non-fabric blinds only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--จบ row1 -->

                <!-- row2 -->
                <div class="row mt-4">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-8">
                        <div class="row" style="height:112%;">
                            <!-- ช่อง 4 -->
                            <div class="col-md-4 mx-auto"  onmouseover="swap3()" onmouseout="swap4()">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row" id="hide-item2">
                                        <img src="4.png" alt="" style="margin-left: 34%; margin-top:10%">
                                    </div>
                                    <div class="row" id="hover-item2">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-secondary " id="minus" onclick="minus8()">
                                                    <input class="text-light" type="radio" name="options" id="option1" autocomplete="off" checked> -
                                                </label>
                                                <label class="btn btn-secondary" style="width:60px;" id="shownum8">
                                                    0
                                                </label>
                                                <label class="btn btn-secondar" id="plus" onclick="plus8()">
                                                    <input  type="radio" name="options" id="option3" autocomplete="off"> +
                                                </label>
                                        </div>
                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 10%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Window wash</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">external windows</p>
                                    </div>
                                </div>
                            </div>
                            <!-- ช่อง 5 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row">
                                        <img src="5.png" alt="" style="margin-left: 33%; margin-top:10%">

                                        <input type="checkbox" id="check5" name="check5" style="margin-left: 1%; margin-top:4%; width:2.5vw; height:2.5vh;">

                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 9%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Fridge</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">internal deep clean</p>
                                    </div>
                                </div>
                            </div>

                            <!-- ช่อง 6 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row">
                                        <img src="6.png" alt="" style="margin-left: 30%; margin-top:8%">

                                        <input type="checkbox" id="check6" name="check6" style="margin-left: -5%; margin-top:4%; width:2.5vw; height:2.5vh;">

                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 8%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Large oven</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">wide (90cm) or </p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">double</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- จบ row2 -->

                <!-- row3 -->
                <div class="row mt-4">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-8">
                        <div class="row" style="height:114%;">
                            <!-- ช่อง 7 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row">
                                        <img src="7.png" alt="" style="margin-left: 25%; margin-top:10%">

                                        <input type="checkbox" id="check7" name="check7" style="margin-left: -4%; margin-top:4%; width:2.5vw; height:2.5vh;">

                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 5%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Microwave</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">internal deep clean</p>
                                    </div>
                                </div>
                            </div>
                            <!-- ช่อง 8 -->
                            <div class="col-md-4 mx-auto">
                                <div style="border: 1px solid #ddd; border-radius:5%; height:97%; width:110%;">
                                    <div class="row">
                                        <img src="8.png" alt="" style="margin-left: 33%; margin-top:13%">

                                        <input type="checkbox" id="check8" name="check8" style="margin-left: 1%; margin-top:4%; width:2.5vw; height:2.5vh;">

                                    </div>
                                    <div class="row mx-auto" style="line-height: 2px; margin-top: 11%">
                                        <p class="card-selection-lighter" style="font-size: 1em; width:100%; text-align:center;">Key pickup</p>
                                        <p class="card-selection-lighter" style="font-size: 0.9em; width:100%; text-align:center;">and drop-off</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mx-auto"></div>
                        </div>
                    </div>
                </div>
                <!-- จบ row3 -->

                <!----------------- จบ Extras -------------->

                <div id="mySidebar" class="sidebar">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><- Back</a>
                </div>

                <div id="main">
                    <button class="openbtn" onclick="openNav()">GET QUOTE  >  </button>
                </div>

                <script>
                    function openNav() {
                        document.getElementById("mySidebar").style.width = "250px";
                        document.getElementsByClassName("body_all").style.filter = "blur(8px)";
                    }

                    function closeNav() {
                        document.getElementById("mySidebar").style.width = "0";
                    }
                </script>

            </div>
        </div>
    </div>
</body>

</html>