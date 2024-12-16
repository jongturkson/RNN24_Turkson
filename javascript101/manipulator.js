console.log("I am in manipulator");

document
    .getElementById("btn")
    .addEventListener("click", function () {
        console.log('You clicked me');
    });

document  
    .getElementById('dislike')
    .addEventListener('click', function() {
        console.log('I dislike programming')

        document
            .getElementsByTagName('p')[0]
            .innerHTML = 'I dislike programming';
    })
    document
    .getElementById('submit')
    .addEventListener('click', function(e) {
        e.preventDefault();
        /**
         * Rules
            - Phone number == 9
            - Password > 6
            - Password != ['password']
            - Password != Phone number
         */
        // 1. Get value of phone number
        let phoneNumber = document
            .getElementById('phone')
            .value;
        
        console.log(phoneNumber);

        // 2. Get value of password field
        let password = document
            .getElementById('pass')
            .value;
        
        console.log(password);

        // 3. Check all rules
        let errorElement = document.getElementById('error')
        if (
            phoneNumber.length != 9 ||
            password.length <= 6 || 
            password == phoneNumber || 
            password == 'password' 
        ) {
            errorElement.innerHTML = 'You shall not pass';
            errorElement.style.backgroundColor = 'red';
            errorElement.style.color = 'white';
        }else {
            errorElement.innerHTML = 'Validation successful';
            errorElement.style.color = 'white';
            errorElement.style.backgroundColor = 'green';
        }
        
        // 4. Login
    })

// let dislikeElement = document.getElementById('dislik');
// console.log(dislikeElement);
