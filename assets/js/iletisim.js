const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Aktif locale'i çek
    const lang = localStorage.getItem('lang') || 'tr';
    const res = await fetch(`locales/${lang}.json`);
    const locale = await res.json();

    let valid = true;

    const fields = [
        { id: 'firstName', errId: 'firstNameErr', key: 'err_firstname' },
        { id: 'lastName', errId: 'lastNameErr', key: 'err_lastname' },
        { id: 'email', errId: 'emailErr', key: 'err_email' },
        { id: 'subject', errId: 'subjectErr', key: 'err_subject' },
        { id: 'message', errId: 'messageErr', key: 'err_message' },
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    fields.forEach((f) => {
        const el = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);

        errEl.textContent = '';
        el.classList.remove('input1-error1');

        if (!el.value.trim()) {
            errEl.textContent = locale[f.key] || f.key;
            el.classList.add('input1-error1');
            valid = false;
        } else if (f.id === 'email' && !emailRegex.test(el.value)) {
            errEl.textContent = locale['err_email'] || 'err_email';
            el.classList.add('input1-error1');
            valid = false;
        }
    });

    document.getElementById('privacyErr').textContent = '';
    if (!document.getElementById('privacyCheck').checked) {
        document.getElementById('privacyErr').textContent = locale['err_privacy'] || 'err_privacy';
        valid = false;
    }

    if (!valid) return;

    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSuccess = document.getElementById('btnSuccess');
    const btnLoader = document.getElementById('btnLoader');

    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    btn.disabled = true;

    setTimeout(() => {
        contactForm.reset();
        btnLoader.style.display = 'none';
        btn.disabled = false;
        btn.style.background = '#22C55E';
        btn.style.borderColor = '#22C55E';

        btnText.style.display = 'none';
        btnSuccess.style.display = 'inline';

        // btn text'i de locale'den al
        btnSuccess.textContent = locale['btn_sent'] || '✓';

        setTimeout(() => {
            btnSuccess.style.display = 'none';
            btnText.style.display = 'inline';
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 2000);
    }, 1500);
});