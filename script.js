<script type="text/javascript">
(function(){
    emailjs.init("Fs33eoK7uZjJCXrAO")
})();
function checkupFutureEmail() {
    console.log('Function called')}
    
    emailjs.send('"service_49ceb9s","template_e9go8Id", templateParams').then (function(reponse){
        console.log('SUCCES!', response.status, response.text)
    })
(function(error){
    console.log('FAILED...', error)
})

</script>
    