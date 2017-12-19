// Initialize Script
var _today = new Date();
var _year = _today.getUTCFullYear();
var _month = _today.getUTCMonth() + 1;

// Year Filter Initialize
$(".dropdown-year .dropdown-menu li a").parents(".dropdown-year").find('.btn').html(_year + '년' + ' <span class="caret"></span>' );
$(".dropdown-year .dropdown-menu li a").parents(".dropdown-year").find('.btn').html(_year + '년' + ' <span class="caret"></span>');

// Month Filter Initialize    
$(".dropdown-month .dropdown-menu li a").parents(".dropdown-month").find('.btn').html(_month + '월' + ' <span class="caret"></span>' );
$(".dropdown-month .dropdown-menu li a").parents(".dropdown-month").find('.btn').html(_month + '월' + ' <span class="caret"></span>');

// Initial Table
$.ajax({
    url: 'https://coinhojae.github.io/DB/' + _year + _month + '.csv',
    dataType: 'text',
}).done(maketable);


// Year
$( ".dropdown-year .dropdown-menu li a" ).click(function() {
    var year_ = $(this).text();
    // Chage Label
    $(this).parents(".dropdown-year").find('.btn').html(year_ + ' <span class="caret"></span>' );
    $(this).parents(".dropdown-year").find('.btn').html(year_ + ' <span class="caret"></span>');

    // Load Table
    filters = get_each_filter();
    load_table(filters[0], filters[1]);
});

// Month
$( ".dropdown-month .dropdown-menu li a" ).click(function() {
    var month_ = $(this).text();
    // Chage Label
    $(this).parents(".dropdown-month").find('.btn').html(month_ + ' <span class="caret"></span>' );
    $(this).parents(".dropdown-month").find('.btn').html(month_ + ' <span class="caret"></span>');

    // Load Table
    filters = get_each_filter();
    load_table(filters[0], filters[1]);
});

// Coinname
$( ".dropdown-coinname .dropdown-menu li a" ).click(function() {
    var coinname_ = $(this).text();

    // Chage Label
    $(this).parents(".dropdown-coinname").find('.btn').html(coinname_ + ' <span class="caret"></span>' );
    $(this).parents(".dropdown-coinname").find('.btn').html(coinname_ + ' <span class="caret"></span>');

    // Filtering
    _filters = get_each_filter();
    $("#hojae table tbody tr").show();
    if(_filters[2].includes("모든") != 1) {
        $("#hojae table tbody tr:not(:contains('" + _filters[2] + "'))").hide();
    }
    if(_filters[3].includes("모든") != 1) {
        $("#hojae table tbody tr:not(:contains('" + _filters[3] + "'))").hide();
    }
});


// Category
$( ".dropdown-category .dropdown-menu li a" ).click(function() {
    var category_ = $(this).text();

    // Chage Label
    $(this).parents(".dropdown-category").find('.btn').html(category_ + ' <span class="caret"></span>' );
    $(this).parents(".dropdown-category").find('.btn').html(category_ + ' <span class="caret"></span>');

    //$ (':not(:contains('+ userString +'))').hide();
    _filters = get_each_filter();

    $("#hojae table tbody tr").show();
    if(_filters[2].includes("모든") != 1) {
        $("#hojae table tbody tr:not(:contains('" + _filters[2] + "'))").hide();
    }
    if(_filters[3].includes("모든") != 1) {
        $("#hojae table tbody tr:not(:contains('" + _filters[3] + "'))").hide();
    }
});

function clear_table() {
  $("#hojae table tbody tr").remove();
}

function load_table(_year, _month) {
clear_table();
$.ajax({
    url: 'https://coinhojae.github.io/DB/' + _year + _month + '.csv',
    dataType: 'text',
}).done(maketable);
}

function get_each_filter() {

  var _year = $(".btn_year").text().toString();
  var _month = $(".btn_month").text().toString();
  var _coinname = $(".btn_coinname").text().toString();
  var _category = $(".btn_category").text().toString();

  _year = _year.substr(0, _year.length-2);
  _month = _month.substr(0, _month.length-2);
  _coinname = _coinname.substr(0, _coinname.length-1);
  _category = _category.substr(0, _category.length-1);

  //alert(_year + '/' + _month + '/' + _coinname + '/' + _category);
  //alert(_year.length);
  //alert(length(_year) + '/' + length(_month) + '/' + length(_coinname) + '/' + length(_category));      

  return [_year, _month, _coinname, _category];
}