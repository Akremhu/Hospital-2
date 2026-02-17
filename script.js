// دالة لفتح الواتساب مباشرة عند الضغط على زر الحجز
function openBooking() {
    const phoneNumber = "967782629622";
    const message = encodeURIComponent("مرحباً مستشفى ابن الحاج، أرغب في الاستفسار عن المواعيد المتاحة.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// تأثير بسيط عند التمرير (Scroll) لجعل التنقل سلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
