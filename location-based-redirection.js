<script>

const NJURL = 'https://elmys-special-services.webflow.io/nj/elmys-special-services';
const NYURL = 'https://elmys-special-services.webflow.io/ny/elmys-special-services';

fetch("https://ipinfo.io/json?token=3562a6b139e492").then((res) => {
res.json().then((data) => {
if(data.region === "New York"){
if(window.location.href!=NYURL){
window.location.href = NYURL;
}
} else if(data.region === "New Jersey") {
if(window.location.href!=NJURL){
window.location.href = NJURL;
}

}
});
});
</script>
