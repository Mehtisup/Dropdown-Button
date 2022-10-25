<script>
function myFunction() {
    document.getElementById("menu").classList.toggle("appear");
}
window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var x = document.getElementsByClassName("list");
        var i;
        for (i = 0 ; i < x.length ; i++) {
            var y = x[i];
            if (y.classList.contains('appear')) {
                y.classList.remove('appear');
            }
        }
    }
}
</script>
