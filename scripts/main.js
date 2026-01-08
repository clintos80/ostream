document.addEventListener('DOMContentLoaded', () => {
    // Set launch date to 14 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 180);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const diff = launchDate - now;

        if (diff <= 0) {
            // Launch!
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Form handling
    const form = document.getElementById('notifyForm');
    const input = form.querySelector('input');
    const button = form.querySelector('button');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = input.value;
        if (!email) return;

        // Simulate API call
        button.textContent = 'Submitting...';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = 'Notify Me';
            button.disabled = false;
            input.value = '';

            notification.classList.add('success');
            setTimeout(() => {
                notification.classList.remove('success');
            }, 3000);
        }, 1500);
    });
});
