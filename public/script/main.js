$( document ).ready(function() {
    $(".delete").click(function() {
        if (confirm("Are you sure? This cannot be undone.")) {
            return true
        }
        return false
    });
});

