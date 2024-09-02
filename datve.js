




document.querySelectorAll('.day').forEach(function(day) {
    day.addEventListener('click', function() {
        document.querySelectorAll('.day').forEach(function(day) {
            day.classList.remove('active');
        });

        // Thêm lớp 'active' vào phần tử được click
        this.classList.add('active');
    });
});
