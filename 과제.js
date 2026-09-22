document.querySelectorAll('.category button').forEach((x, i) => {
    const ids = ['c1','c2','c3','c4','c5','c6'];
    x.addEventListener('click', () => {
        document.getElementById(ids[i]).scrollIntoView({behavior: 'smooth'});
    });
});
