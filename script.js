<script>
    document.querySelectorAll('.articles a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    });
</script>
