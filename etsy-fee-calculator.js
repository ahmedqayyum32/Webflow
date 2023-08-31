<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/money.js/0.2.0/money.min.js" integrity="sha512-Uv+htgH6sOoowXXo7l7iieSRizHDNwYor+RZVc4/HQ340/yDCeXvdJebdReUk7LgWzxIrRRUM1T+MvLCHFbsHQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>

var myChart;var currencyRates;
var paymentMethod=[{paymentPercentage:3,paymentaddAmount:0.25,paymentType:'Etsy Payment'},{ paymentPercentage: 2.9, paymentaddAmount: 0.30, paymentType: 'PayPal (Domestic)' }, { paymentPercentage: 4.4, paymentaddAmount: 0.30, paymentType: 'PayPal (International)' }, { paymentPercentage: 2.2, paymentaddAmount: 0.30, paymentType: 'PayPal (Non-profit)' }, { paymentPercentage: 5, paymentaddAmount: 0.05, paymentType: 'PayPal (Micropayment)' } ];
var countries = [ 
{ country: 'United States', percentage: 3, addAmount: 0.25, abrv: 'USD', symbol: '$' }, { country: 'Australia (domestic orders)', percentage: 3, addAmount: 0.25, abrv: 'AUD', symbol: '$' }, { country: 'Australia (international orders)', percentage: 4, addAmount: 0.25, abrv: 'AUD', symbol: '$' }, { country: 'Austria', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Belgium', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Bulgaria', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Canada (domestic orders or orders from the US)', percentage: 3, addAmount: 0.25, abrv: 'CAD', symbol: '$' }, { country: 'Canada (international orders)', percentage: 4, addAmount: 0.25, abrv: 'CAD', symbol: '$' }, { country: 'Croatia', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Cyprus', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' },
{ country: 'Czech Republic', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Denmark', percentage: 4, addAmount: 2.50, abrv: 'DKK', symbol: 'kr' }, { country: 'Estonia', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Finland', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'France', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Germany', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Greece', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Hong Kong', percentage: 4.4, addAmount: 2.00, abrv: 'HKD', symbol: '$' }, { country: 'Hungary', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Indonesia', percentage: 4.5, addAmount: 7000, abrv: 'IDR', symbol: 'Rp' }, { country: 'Ireland', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Israel', percentage: 4.5, addAmount: 2, abrv: 'ILS', symbol: '₪' }, { country: 'Italy', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Latvia', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Lithuania', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Luxembourg', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Malaysia', percentage: 4.5, addAmount: 2, abrv: 'MYR', symbol: 'RM' }, { country: 'Malta', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Mexico', percentage: 4.5, addAmount: 10, abrv: 'MXN', symbol: '$' }, { country: 'Morocco', percentage: 4.5, addAmount: 5, abrv: 'MAD', symbol: 'DH' }, { country: 'Netherlands', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'New Zealand (domestic orders)', percentage: 3, addAmount: 0.30, abrv: 'NZD', symbol: '$' }, { country: 'New Zealand (international orders)', percentage: 4, addAmount: 0.30, abrv: 'NZD', symbol: '$' }, { country: 'Norway', percentage: 4, addAmount: 2.50, abrv: 'NOK', symbol: 'kr' }, { country: 'Philippines', percentage: 4.5, addAmount: 25, abrv: 'PHP', symbol: '₱' }, { country: 'Poland', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: 'zł' }, { country: 'Portugal', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Romania', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Singapore', percentage: 4.4, addAmount: 0.35, abrv: 'SGD', symbol: '$' }, { country: 'Slovakia', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Slovenia', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'South Africa', percentage: 4.5, addAmount: 8, abrv: 'ZAR', symbol: 'R' }, { country: 'Spain', percentage: 4, addAmount: 0.30, abrv: 'EUR', symbol: '€' }, { country: 'Sweden', percentage: 4, addAmount: 3.00, abrv: 'SEK', symbol: 'kr' }, { country: 'Switzerland', percentage: 4, addAmount: 0.50, abrv: 'CHF', symbol: 'CHF' }, { country: 'Turkey', percentage: 6.5, addAmount: 3, abrv: 'TRY', symbol: '₺' }, { country: 'United Kingdom', percentage: 4, addAmount: 0.20, abrv: 'GBP', symbol: '£' }, { country: 'Vietnam', percentage: 4.5, addAmount: 11500, abrv: 'VND', symbol: '₫' }
 ];


  $( document ).ready(function() {

    //generate default chart:
    generateChart(33, 33, 34);


    //generte countries and payment methods dropdowns in html:
    $.each(countries, function( key, value ) {
      $("#country-id").append(`<option value="${key}"> ${value.country} </option>`);
    });
    
   $("#country-id").change(function() {
     let currencySymbol = countries[$(this).val()].symbol;
			$("#selling-price-currency-symbol").text(currencySymbol);  
      $("#cost-currency-symbol").text(currencySymbol);               
   });

    $.each(paymentMethod, function( key, value ) {
      $("#payment-method-id").append(`<option value="${key}"> ${value.paymentType} </option>`);
    });

var calculations = function() {
    
 //validation  
if($('#selling-price-id').val() == "" || $('#cost-id').val() == "") {
if($('#selling-price-id').val() == ""){
$('#selling-price-id').css('border-color', 'red');
} else {
$('#selling-price-id').css('border-color', '#ced4da');
}
if($('#cost-id').val() == ""){
$('#cost-id').css('border-color', 'red');
} else {
$('#cost-id').css('border-color', '#ced4da');
}
return false;
} else{
$('#selling-price-id').css('border-color', '#ced4da');
$('#cost-id').css('border-color', '#ced4da');
}
      $.getJSON(
        'https://openexchangerates.org/api/latest.json?app_id=e48310eeef6642faa8fec939d4eb51ba',
        function(data) {
          
          if ( typeof fx !== "undefined" && fx.rates ) {
            fx.rates = data.rates;
            fx.base = data.base;

            let country = countries[$("#country-id").val()];
            let paymentType = paymentMethod[$("#payment-method-id").val()];
           // let countryFixedFee = fx(country.addAmount).convert({ from:fx.base, to:country.abrv });
            let countryFixedFee = country.addAmount;
            let transactionFixedFee = fx(paymentType.paymentaddAmount).convert({ from:fx.base, to:country.abrv });

            let sellingPrice = $('#selling-price-id').val();
let cost = $('#cost-id').val();
let revenue = sellingPrice;
let listingFee = fx(0.20).convert({ from:fx.base, to:country.abrv });
let etsyAdFee = 0;
if ($('#ads-fee-id').is(':checked')) {
etsyAdFee = (sellingPrice * $("#fee-percentage-id").val()) / 100 ;
};

let processingFee = 0;
if($("#payment-method-id").val() == 0) {
  processingFee = ((sellingPrice * country.percentage) / 100) + countryFixedFee;
} else {
 processingFee = ((sellingPrice * paymentType.paymentPercentage) / 100) + transactionFixedFee;
}
let transactionFee = (5*sellingPrice) / 100;
let totalEtsyFee = listingFee + processingFee + transactionFee + etsyAdFee;
let totalCost =  parseFloat(cost) + parseFloat(totalEtsyFee);
let totalProfit = parseFloat(revenue) - parseFloat(totalCost);
let profitMargin = (totalProfit/revenue) * 100;
$("#selling-price-currency-symbol").text(country.symbol);
$("#cost-currency-symbol").text(country.symbol);
$("#revenue-result-id").text(country.symbol + parseFloat(revenue).toFixed(2));
$("#cost-result-id").text(country.symbol + parseFloat(cost).toFixed(2));
$("#listing-fee-result-id").text(country.symbol + parseFloat(listingFee).toFixed(2));
$("#transaction-fee-result-id").text(country.symbol + parseFloat(transactionFee).toFixed(2));
$("#processing-fee-id").text(country.symbol + parseFloat(processingFee).toFixed(2));
$("#etsy-offsite-adsfee").text(country.symbol + parseFloat(etsyAdFee).toFixed(2));
$("#total-cost-id").text(country.symbol + parseFloat(totalCost).toFixed(2) );
$("#total-etsyfee-calculated").text(country.symbol +  parseFloat(totalEtsyFee).toFixed(2) );
$("#profit-id").text(country.symbol + parseFloat(totalProfit).toFixed(2));
$("#total-profit-calculated").text(country.symbol + parseFloat(totalProfit).toFixed(2) );
$("#profit-margin-calculated").text(parseFloat(profitMargin).toFixed(2) + "%");
myChart.destroy();
generateChart(totalProfit, totalEtsyFee, totalCost);
$(".chart-div").css('display', 'block');
} else {
            // If not, apply to fxSetup global:
            var fxSetup = {
              rates : data.rates,
              base : data.base
            }
            }
        });
  };

$("#calculate-btn").click(calculations);
$(document).keyup(function (e) {
if (e.which == 13) {
return calculations();
}
});
});
  function generateChart(totalProfit, totalEtsyFee, totalCost) {
    const data = {
      labels: [
        'Profit',
        'Etsy fees',
        'Prod. cost'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [totalProfit, totalEtsyFee, totalCost],
        backgroundColor: [
          'rgb(69, 113, 208)',
          'rgb(123, 160, 241)',
          'rgb(208, 216, 230)'
        ],
        hoverOffset: 4
      }]
    };
    var ctx = document.getElementById('myChart');

    myChart = new Chart(ctx, { 
      type: 'doughnut',
      responsive: true,
      maintainAspectRatio: false,
      data: data,
    });
  }
</script>
