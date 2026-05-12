
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const fields = [
        { id: 'firstName', errId: 'firstNameErr', msg: 'Ad zorunludur.' },
        { id: 'lastName', errId: 'lastNameErr', msg: 'Soyad zorunludur.' },
        { id: 'email', errId: 'emailErr', msg: 'Geçerli bir e-posta girin.' },
        { id: 'subject', errId: 'subjectErr', msg: 'Konu seçiniz.' },
        { id: 'message', errId: 'messageErr', msg: 'Mesaj zorunludur.' },
    ];


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    fields.forEach((f) => {
        const el = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);

        errEl.textContent = '';
        el.classList.remove('input1-error1');

        if (!el.value.trim()) {
            errEl.textContent = f.msg;
            el.classList.add('input1-error1');
            valid = false;
        } else if (f.id === 'email' && !emailRegex.test(el.value)) {
            errEl.textContent = 'Geçerli bir e-posta girin.';
            el.classList.add('input1-error1');
            valid = false;
        }
    });

    document.getElementById('privacyErr').textContent = '';


    if (!document.getElementById('privacyCheck').checked) {
        document.getElementById('privacyErr').textContent = 'Gizlilik politikasını onaylamanız gerekiyor.';
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

        setTimeout(() => {

            btnSuccess.style.display = 'none';
            btnText.style.display = 'inline';
            btn.style.background = '';
            btn.style.borderColor = '';

        }, 2000);

    }, 1500);
});



