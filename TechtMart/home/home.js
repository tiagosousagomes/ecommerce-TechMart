document.getElementById('imgPerfil').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Optionally, hide the menu if clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.img-perfil')) {
        var dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
};
