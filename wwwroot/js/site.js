﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.






function ListAllPeople()
{
    var peopleList = $('div#peopleList');
    $.ajax({
        type: "GET",
        url: "Person/PersonView",
        success: function (peopleList) {
            console.log(peopleList);
            $("div#peopleList")
        }
    })
}

function GetDetails() {

    var detailsGet = $('#detailsGet');
    $.ajax({
        type: "POST",
        url: "Person/PersonView",
        success: function (detailsGet) {
            console.log(detailsGet);
            document.detailsGet
        }
    })
}


function AnnihilatePerson() {

    var annihilate = $('#annihilate');
    $.ajax({
        type: "POST",
        url: "Person/PersonView",
        success: function (annihilate) {
            console.log(annihilate);
            document.annihilate
        }
    })

}



