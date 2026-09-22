document.querySelectorAll('.category button').forEach((btn, i) => {
    const ids = ['c1','c2','c3','c4','c5','c6'];
    btn.addEventListener('click', () => {
        document.getElementById(ids[i]).scrollIntoView({behavior: 'smooth'});
    });
});