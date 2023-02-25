<style>
.responsiveCal {
position: relative; padding-bottom: 75%; height: 0; overflow: hidden;
}
 
.responsiveCal iframe {
position: absolute; top:0; left: 0; width: 100%; height: 100%;
}

@media all and (min-width: 768px) {
    .deskContent {display:block;}
    .phoneContent {display:none;}
}

@media all and (max-width: 767px) {
    .deskContent {display:none;}
    .phoneContent {display:block;}
		.responsiveCal iframe {height: 500px;}
		.responsiveCal {height: 500px;}

}
</style>
<div class="responsiveCal">
<div class="deskContent"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showCalendars=0&showPrint=0&showTitle=0&src=Y19lNDM3MDFmYWVhYmYxOTU1N2VmN2QxNWRjOTYzZTY3Y2E5NzU5NmYwMjViMGMwY2MxMmFhODRhMjY2ZmZjYWZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
</div>


<div class="phoneContent"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showCalendars=0&showTitle=0&showPrint=0&mode=AGENDA&showDate=0&src=Y19lNDM3MDFmYWVhYmYxOTU1N2VmN2QxNWRjOTYzZTY3Y2E5NzU5NmYwMjViMGMwY2MxMmFhODRhMjY2ZmZjYWZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285F4" style="border-width:0" width="100%" height="500px" frameborder="0" scrolling="no"></iframe>
</div>
</div>
