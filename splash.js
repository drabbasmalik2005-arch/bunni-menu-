
(function() {
    const splash = document.getElementById('splash-screen');
    const appContent = document.getElementById('app-content');
    
    // دالة لإظهار المحتوى بسلاسة
    const showContent = () => {
        if (appContent) {
            appContent.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
        }
        document.body.classList.remove('overflow-hidden');
    };

    if (!splash) {
        showContent();
        return;
    }

    // دالة لإخفاء الشاشة الافتتاحية
    const dismiss = () => {
        splash.style.opacity = '0';
        showContent();
        splash.setAttribute('aria-hidden', 'true');
        setTimeout(() => { 
            if (splash.parentNode) splash.remove(); 
        }, 600);
    };

    // التحقق مما إذا كان الزائر قد دخل الموقع مسبقاً (لتخطي الشاشة عند التحديث)
    if (sessionStorage.getItem('bunni_splash_played')) {
        splash.style.display = 'none';
        dismiss();
        return;
    }

    // تحميل الصورة في الخلفية أولاً
    const hero = new Image();
    hero.src = 'images/hero.webp';

    hero.onload = () => {
        sessionStorage.setItem('bunni_splash_played', 'true');
        dismiss();
    };
    
    // حماية احتياطية: إذا تأخرت الصورة أكثر من 5 ثوانٍ، اعرض الموقع فوراً
    setTimeout(() => {
        sessionStorage.setItem('bunni_splash_played', 'true');
        dismiss();
    }, 5000);
})();


```
