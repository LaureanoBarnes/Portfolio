emailjs.init('BqwBdJojkxq_YgK4Y');

    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Sending...';

        const serviceID = 'service_84bia15';
        const templateID = 'template_fo1zjwi';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
    