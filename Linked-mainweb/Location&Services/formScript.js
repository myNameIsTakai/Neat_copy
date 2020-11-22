/*functon + - ในฟอร์ม*/
var num = 1; var num2 = 0; var num3 = 1; var num4 = 1; var num5 = 0; var num6 = 0; var num7 = 0; var num8 = 0;
function minus() {
    if (num > 1) {
        num -= 1;
        document.getElementById('shownum').innerHTML = num;
        console.log(num);
    }
}

function plus() {
    if (num < 9) {
        num += 1;
        document.getElementById('shownum').innerHTML = num;
        console.log(num);
    }
}

function minus2() {
    if (num2 > 0) {
        num2--;
        document.getElementById('shownum2').innerHTML = num2;
    }
}

function plus2() {
    if (num2 < 9) {
        num2++;
        document.getElementById('shownum2').innerHTML = num2;
    }
}

function minus3() {
    if (num3 > 1) {
        num3--;
        document.getElementById('shownum3').innerHTML = num3;
    }
}

function plus3() {
    if (num3 < 9) {
        num3++;
        document.getElementById('shownum3').innerHTML = num3;
    }
}

function minus4() {
    if (num4 > 0) {
        num4--;
        document.getElementById('shownum4').innerHTML = num4;
    }
}

function plus4() {
    if (num4 < 9) {
        num4++;
        document.getElementById('shownum4').innerHTML = num4;
    }
}

function minus5() {
    if (num5 > 0) {
        num5--; document.getElementById('shownum5').innerHTML = num5;
    }
}

function plus5() {
    if (num5 < 9) {
        num5++; document.getElementById('shownum5').innerHTML = num5;
    }
}

function minus6() {
    if (num6 > 0) {
        num6--; document.getElementById('shownum6').innerHTML = num6;
    }
}

function plus6() {
    if (num6 < 9) {
        num6++;
        document.getElementById('shownum6').innerHTML = num6;
    }
}

function minus7() {
    if (num7 > 0) {
        num7--;
        document.getElementById('shownum7').innerHTML = num7;
    }
}
function plus7() {
    if (num7 < 9) {
        num7++;
        document.getElementById('shownum7').innerHTML = num7;
    }
}

function minus8() {
    if (num8 > 0) {
        num8--; document.getElementById('shownum8').innerHTML = num8;
    }
}

function plus8() {
    if (num8 < 9) {
        num8++; document.getElementById('shownum8').innerHTML = num8;
    }
}

/*้hover section*/
function swap() { var hide = document.getElementById('hide-item'); var show = document.getElementById('hover-item'); hide.style.display = 'none'; show.style.display = 'block'; }
function swap2() { var hide = document.getElementById('hover-item'); var show = document.getElementById('hide-item'); hide.style.display = 'none'; show.style.display = 'block'; }
/*้hover section*/
function swap3() { var hide = document.getElementById('hide-item2'); var show = document.getElementById('hover-item2'); hide.style.display = 'none'; show.style.display = 'block'; }
function swap4() { var hide = document.getElementById('hover-item2'); var show = document.getElementById('hide-item2'); hide.style.display = 'none'; show.style.display = 'block'; }
/*Check box section*/

// form Script
function openNav() {
    // เซตขนาดหน้าจอ
    document.getElementById("mySidebar").style.width = "22%";

    // Reset ค่า
    var text = "";
    var bedroom = "";
    var livingroom = "";
    var other = "";
    var Bathroom = "";
    var Kitchen = "";
    var Laundry = "";
    var Balcony = "";
    var Garage = "";
    var Carpet = "";
    var WallWash = "";
    var Blinds = "";
    var Window = "";
    var Fridge = "";
    var LargeOven = "";
    var Microwave = "";
    var Key = "";
    var subtotal = 0;
    var price = "";

    document.getElementById("block1").innerHTML = "";

    document.getElementById("block2").innerHTML = "";
    document.getElementById("block22").innerHTML = "";
    document.getElementById("block23").innerHTML = "";
    document.getElementById("block24").innerHTML = "";
    document.getElementById("block25").innerHTML = "";

    document.getElementById("block3").innerHTML = "";
    document.getElementById("block32").innerHTML = "";
    document.getElementById("block33").innerHTML = "";

    document.getElementById("block41").innerHTML = "";
    document.getElementById("block42").innerHTML = "";
    document.getElementById("block43").innerHTML = "";
    document.getElementById("block44").innerHTML = "";
    document.getElementById("block45").innerHTML = "";
    document.getElementById("block46").innerHTML = "";
    document.getElementById("block47").innerHTML = "";
    document.getElementById("block48").innerHTML = "";

    document.getElementById("block51").innerHTML = "";
    document.getElementById("block52").innerHTML = "";
    document.getElementById("block53").innerHTML = "";

    // STUDIO
    if (document.getElementById("customRadio1").checked) {
        text += "<div class='row font-sizeinfo'><div class='col-10'><strong>STUDIO</div><div class='col-1'>" + "1" + "</strong></div></div>";
        document.getElementById("block1").innerHTML = text;
        subtotal += 215;

        // Bedroom
        bedroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>BEDROOM</div><div class='col-1'>" + num + "</strong></div></div>";
        document.getElementById("block2").innerHTML = bedroom;
        subtotal += 50*num;

        // Other
        if (num2 > 0) {
            other += "<div class='row font-sizeinfo'><div class='col-10'><strong>OTHER</div><div class='col-1'>" + num2 + "</strong></div></div>";
            document.getElementById("block23").innerHTML = other;
            subtotal += 50*num2;
        }

        // Bathroom
        Bathroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>BATHROOM</div><div class='col-1'>" + num3 + "</strong></div></div>";
        document.getElementById("block24").innerHTML = Bathroom;
        subtotal += 50*num3;

        // Kitchen
        Kitchen += "<div class='row font-sizeinfo'><div class='col-10'><strong>KITCHEN</div><div class='col-1'>" + "1" + "</strong></div></div>";
        document.getElementById("block25").innerHTML = Kitchen;

        // Laundry
        if (num4 > 0)
            Laundry += "<div class='row font-sizeinfo'><div class='col-10'><strong>LAUNDRY</div><div class='col-1'>" + num4 + "</strong></div></div>";
        document.getElementById("block3").innerHTML = Laundry;
        subtotal += 25*num4;

        // Balcony
        if (num5 > 0) {
            Balcony += "<div class='row font-sizeinfo'><div class='col-10'><strong>BALCONY</div><div class='col-1'>" + num5 + "</strong></div></div>";
            document.getElementById("block32").innerHTML = Balcony;
            subtotal += 50*num5;
        }

        // Garage
        if (num6 > 0) {
            Garage += "<div class='row font-sizeinfo'><div class='col-10'><strong>GARAGE</div><div class='col-1'>" + num6 + "</strong></div></div>";
            document.getElementById("block33").innerHTML = Garage;
            subtotal += 50*num6;
        }


        // CARPET STEAM CLEAN
        if (document.getElementById("check1").checked) {
            Carpet += "<div class='row font-sizeinfo'><div class='col-9'><strong>CARPET STEAM CLEAN</div><div class='col-3'>" + "All rooms" + "</strong></div></div>";
            document.getElementById("block41").innerHTML = Carpet;
            subtotal += 120;
        }

        // WALL WASH
        if (document.getElementById("check2").checked) {
            WallWash += "<div class='row font-sizeinfo'><div class='col-9'><strong>WALL WASH</div><div class='col-3'>" + "All rooms" + "</strong></div></div>";
            document.getElementById("block42").innerHTML = WallWash;
            subtotal += 120;
        }

        // Blinds
        if (num7 > 0) {
            Blinds += "<div class='row font-sizeinfo'><div class='col-10'><strong>BLINDS</div><div class='col-1'>" + num7 + "</strong></div></div>";
            document.getElementById("block43").innerHTML = Blinds;
            subtotal += 20*num7;
        }

        // Window
        if (num8 > 0) {
            Window += "<div class='row font-sizeinfo'><div class='col-10'><strong>WINDOW WASH</div><div class='col-1'>" + num8 + "</strong></div></div>";
            document.getElementById("block44").innerHTML = Window;
            subtotal += 15*num8;
        }

        // Fridge
        if (document.getElementById("check5").checked) {
            Fridge += "<div class='row font-sizeinfo'><div class='col-10'><strong>FRIDGE</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block45").innerHTML = Fridge;
            subtotal += 60;
        }

        // LargeOven
        if (document.getElementById("check6").checked) {
            LargeOven += "<div class='row font-sizeinfo'><div class='col-10'><strong>LARGE OVEN</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block46").innerHTML = LargeOven;
            subtotal += 35;
        }

        // Microwave
        if (document.getElementById("check7").checked) {
            Microwave += "<div class='row font-sizeinfo'><div class='col-10'><strong>MICROWAVE</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block47").innerHTML = Microwave;
            subtotal += 20;
        }

        // Key Pickup
        if (document.getElementById("check8").checked) {
            Key += "<div class='row font-sizeinfo'><div class='col-10'><strong>KEY PICKUP</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block48").innerHTML = Key;
            subtotal += 30;
        }
    }

    // ------------------------------------------------------------------------------------------------------------
    // APARTMENT
    else if (document.getElementById("customRadio2").checked) {
        text += "<div class='row font-sizeinfo'><div class='col-10'><strong>APARTMENT</div><div class='col-1'>" + "1" + "</strong></div></div>";
        document.getElementById("block1").innerHTML = text;
        subtotal += 250;

        // Bedroom
        bedroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>BEDROOM</div><div class='col-1'>" + num + "</strong></div></div>";
        document.getElementById("block2").innerHTML = bedroom;
        subtotal +=50*num;

        // Living room
        if (document.getElementById("customRadio2").checked) {
            livingroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>LIVING ROOM</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block22").innerHTML = livingroom;
        }
        else if (document.getElementById("customRadio3").checked) {
            livingroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>LIVING ROOM</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block22").innerHTML = livingroom;
        }

        // Other
        if (num2 > 0) {
            other += "<div class='row font-sizeinfo'><div class='col-10'><strong>OTHER</div><div class='col-1'>" + num2 + "</strong></div></div>";
            document.getElementById("block23").innerHTML = other;
            subtotal +=50*num2;
        }

        // Bathroom
        Bathroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>BATHROOM</div><div class='col-1'>" + num3 + "</strong></div></div>";
        document.getElementById("block24").innerHTML = Bathroom;
        subtotal +=50*num3;

        // Kitchen
        Kitchen += "<div class='row font-sizeinfo'><div class='col-10'><strong>KITCHEN</div><div class='col-1'>" + "1" + "</strong></div></div>";
        document.getElementById("block25").innerHTML = Kitchen;
        

        // Laundry
        if (num4 > 0)
            Laundry += "<div class='row font-sizeinfo'><div class='col-10'><strong>LAUNDRY</div><div class='col-1'>" + num4 + "</strong></div></div>";
        document.getElementById("block3").innerHTML = Laundry;
        subtotal += 25*num4;

        // Balcony
        if (num5 > 0) {
            Balcony += "<div class='row font-sizeinfo'><div class='col-10'><strong>BALCONY</div><div class='col-1'>" + num5 + "</strong></div></div>";
            document.getElementById("block32").innerHTML = Balcony;
            subtotal +=50*num5;
        }

        // Garage
        if (num6 > 0) {
            Garage += "<div class='row font-sizeinfo'><div class='col-10'><strong>GARAGE</div><div class='col-1'>" + num6 + "</strong></div></div>";
            document.getElementById("block33").innerHTML = Garage;
            subtotal +=50*num6;
        }


        // CARPET STEAM CLEAN
        if (document.getElementById("check1").checked) {
            Carpet += "<div class='row font-sizeinfo'><div class='col-9'><strong>CARPET STEAM CLEAN</div><div class='col-3'>" + "All rooms" + "</strong></div></div>";
            document.getElementById("block41").innerHTML = Carpet;
            if(num2 > 0){
                subtotal += 160;
            }else{subtotal +=120;}
        }

        // WALL WASH
        if (document.getElementById("check2").checked) {
            WallWash += "<div class='row font-sizeinfo'><div class='col-9'><strong>WALL WASH</div><div class='col-3'>" + "All rooms" + "</strong></div></div>";
            document.getElementById("block42").innerHTML = WallWash;
            if(num2 > 0){
                subtotal += 150;
            }else{subtotal +=120;}
        }

        // Blinds
        if (num7 > 0) {
            Blinds += "<div class='row font-sizeinfo'><div class='col-10'><strong>BLINDS</div><div class='col-1'>" + num7 + "</strong></div></div>";
            document.getElementById("block43").innerHTML = Blinds;
            subtotal += 20*num7;
        }

        // Window
        if (num8 > 0) {
            Window += "<div class='row font-sizeinfo'><div class='col-10'><strong>WINDOW WASH</div><div class='col-1'>" + num8 + "</strong></div></div>";
            document.getElementById("block44").innerHTML = Window;
            subtotal += 15*num8;
        }

        // Fridge
        if (document.getElementById("check5").checked) {
            Fridge += "<div class='row font-sizeinfo'><div class='col-10'><strong>FRIDGE</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block45").innerHTML = Fridge;
            subtotal += 60;

        }

        // LargeOven
        if (document.getElementById("check6").checked) {
            LargeOven += "<div class='row font-sizeinfo'><div class='col-10'><strong>LARGE OVEN</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block46").innerHTML = LargeOven;
            subtotal +=35;
        }

        // Microwave
        if (document.getElementById("check7").checked) {
            Microwave += "<div class='row font-sizeinfo'><div class='col-10'><strong>MICROWAVE</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block47").innerHTML = Microwave;
            subtotal +=20;
        }

        // Key Pickup
        if (document.getElementById("check8").checked) {
            Key += "<div class='row font-sizeinfo'><div class='col-10'><strong>KEY PICKUP</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block48").innerHTML = Key;
            subtotal +=30;
        }
    }

    // ------------------------------------------------------------------------------------------------------------
    // HOUSE
    else if (document.getElementById("customRadio3").checked) {
        text += "<div class='row font-sizeinfo'><div class='col-10'><strong>HOUSE</div><div class='col-1'>" + "1" + "</strong></div></div>";
        document.getElementById("block1").innerHTML = text;
        subtotal += 450;

        // Bedroom
        bedroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>BEDROOM</div><div class='col-1'>" + num + "</strong></div></div>";
        document.getElementById("block2").innerHTML = bedroom;
        subtotal += 50*num;

        // Living room
        if (document.getElementById("customRadio2").checked) {
            livingroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>LIVING ROOM</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block22").innerHTML = livingroom;
        }
        else if (document.getElementById("customRadio3").checked) {
            livingroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>LIVING ROOM</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block22").innerHTML = livingroom;
        }

        // Other
        if (num2 > 0) {
            other += "<div class='row font-sizeinfo'><div class='col-10'><strong>OTHER</div><div class='col-1'>" + num2 + "</strong></div></div>";
            document.getElementById("block23").innerHTML = other;
            subtotal += 50*num2;
        }

        // Bathroom
        Bathroom += "<div class='row font-sizeinfo'><div class='col-10'><strong>BATHROOM</div><div class='col-1'>" + num3 + "</strong></div></div>";
        document.getElementById("block24").innerHTML = Bathroom;
        subtotal += 50*num3;

        // Kitchen
        Kitchen += "<div class='row font-sizeinfo'><div class='col-10'><strong>KITCHEN</div><div class='col-1'>" + "1" + "</strong></div></div>";
        document.getElementById("block25").innerHTML = Kitchen;

        // Laundry
        if (num4 > 0)
            Laundry += "<div class='row font-sizeinfo'><div class='col-10'><strong>LAUNDRY</div><div class='col-1'>" + num4 + "</strong></div></div>";
        document.getElementById("block3").innerHTML = Laundry;
        subtotal += 25*num4;

        // Balcony
        if (num5 > 0) {
            Balcony += "<div class='row font-sizeinfo'><div class='col-10'><strong>BALCONY</div><div class='col-1'>" + num5 + "</strong></div></div>";
            document.getElementById("block32").innerHTML = Balcony;
            subtotal += 50*num5;
        }

        // Garage
        if (num6 > 0) {
            Garage += "<div class='row font-sizeinfo'><div class='col-10'><strong>GARAGE</div><div class='col-1'>" + num6 + "</strong></div></div>";
            document.getElementById("block33").innerHTML = Garage;
            subtotal += 50*num6;
        }


        // CARPET STEAM CLEAN
        if (document.getElementById("check1").checked) {
            Carpet += "<div class='row font-sizeinfo'><div class='col-9'><strong>CARPET STEAM CLEAN</div><div class='col-3'>" + "All rooms" + "</strong></div></div>";
            document.getElementById("block41").innerHTML = Carpet;
            if(num2 > 0){
                subtotal += 160;
            }else{subtotal +=120;}
        }

        // WALL WASH
        if (document.getElementById("check2").checked) {
            WallWash += "<div class='row font-sizeinfo'><div class='col-9'><strong>WALL WASH</div><div class='col-3'>" + "All rooms" + "</strong></div></div>";
            document.getElementById("block42").innerHTML = WallWash;
            if(num2 > 0){
                subtotal += 150;
            }else{subtotal +=120;}
        }

        // Blinds
        if (num7 > 0) {
            Blinds += "<div class='row font-sizeinfo'><div class='col-10'><strong>BLINDS</div><div class='col-1'>" + num7 + "</strong></div></div>";
            document.getElementById("block43").innerHTML = Blinds;
            subtotal += 20*num7;
        }

        // Window
        if (num8 > 0) {
            Window += "<div class='row font-sizeinfo'><div class='col-10'><strong>WINDOW WASH</div><div class='col-1'>" + num8 + "</strong></div></div>";
            document.getElementById("block44").innerHTML = Window;
            subtotal += 15*num8;
        }

        // Fridge
        if (document.getElementById("check5").checked) {
            Fridge += "<div class='row font-sizeinfo'><div class='col-10'><strong>FRIDGE</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block45").innerHTML = Fridge;
            subtotal += 60;
        }

        // LargeOven
        if (document.getElementById("check6").checked) {
            LargeOven += "<div class='row font-sizeinfo'><div class='col-10'><strong>LARGE OVEN</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block46").innerHTML = LargeOven;
            subtotal += 35;
        }

        // Microwave
        if (document.getElementById("check7").checked) {
            Microwave += "<div class='row font-sizeinfo'><div class='col-10'><strong>MICROWAVE</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block47").innerHTML = Microwave;
            subtotal += 20;
        }

        // Key Pickup
        if (document.getElementById("check8").checked) {
            Key += "<div class='row font-sizeinfo'><div class='col-10'><strong>KEY PICKUP</div><div class='col-1'>" + "1" + "</strong></div></div>";
            document.getElementById("block48").innerHTML = Key;
            subtotal += 30;
        }
    }

    var discountunprint = subtotal*0.15;
    var discount = discountunprint.toFixed(2);
    var subtotal1 = subtotal.toFixed(2);
    var total = subtotal1 - discount;
    var total1 = total.toFixed(2);

    // print ราคาสุธิ
    price += "<div class='row font-sizeinfo'><div class='col-8'><strong>SUBTOTAL</strong></div><div class='col-3' style='margin-left:auto;'>$" + subtotal1 + "</div></div>";
    price += "<div class='row font-sizeinfo mt-3'><div class='col-8'><strong>DISCOUNT (15% OFF)</strong></div><div class='col-3' style='color:#18AB5C; margin-left:auto;'>- $" + discount + "</div></div>";
    price += "<div class='row font-sizeinfo mt-3'><div class='col-6'><strong>TOTAL</strong></div><div class='col-5' style='margin-left:auto;font-size:24px; color:#1280C9;'>$" + total1 + "</div></div>";

    document.getElementById("block51").innerHTML = price;

    // ------------------------------------------------------------------------------------------------------------

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function Checkout(){
    alert("ชำระเงินสำเร็จ= =");
    document.getElementById("mySidebar").style.width = "0";
}