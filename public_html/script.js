function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.remove('active');
        });
    });

    function updateCountdown() {
        const now = new Date();
        let targetDate = new Date(now.getFullYear(), 10, 24); // Month is 0-indexed, so 10 is November
        
        if (now > targetDate) {
            targetDate = new Date(now.getFullYear() + 1, 10, 24);
        }
        
        const difference = targetDate - now;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
        }
    }

    if (document.getElementById('days')) {
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to avoid delay
    }
});