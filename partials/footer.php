</main>

<footer>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="row justify-content-center align-items-center">
                        <label for="subscribe-email" class="accent-font">Subscribe to our newsletter</label>
                        <input type="email" id="subscribe-email" name="subscribe-email" placeholder="Email">
                        <button type="submit">GO</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row w_line justify-content-center align-items-center">
            <p class="copyright">&copy; 2017 medecine esthetique dr Yves Herbert &mdash; Montreal </p>
        </div>
    </div>
</footer>

<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous">
</script>

<script src="<?= asset('scripts/maps.js') ?>"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<script
        async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7pa_P0K5aXe1B1scq-lRFYmP81Y8yQmo&callback=initMap">
</script>

<script src="<?= asset('scripts/equalheights.js') ?>"></script>
<script src="<?= asset('scripts/main.js') ?>"></script>



</body>
</html>