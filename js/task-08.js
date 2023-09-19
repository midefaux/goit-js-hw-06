 const loginForm = document.querySelector('.login-form');

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.elements.email;
            const passwordInput = this.elements.password;
            if (!emailInput.value || !passwordInput.value) {
                alert('All fields must be filled in.');
                return;
            }
            const formData = {
                email: emailInput.value,
                password: passwordInput.value,
            };
            console.log(formData);
            this.reset();
        });
