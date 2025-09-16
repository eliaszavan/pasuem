document.querySelectorAll('details').forEach(subject => {
    const checkboxes = subject.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        const saved = localStorage.getItem(cb.dataset.id);
        if (saved === 'true') cb.checked = true;
        cb.addEventListener('change', () => {
            localStorage.setItem(cb.dataset.id, cb.checked);
            updateProgress(subject);
        });
    });
    updateProgress(subject);
});