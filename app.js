function gets() {

            if (localStorage.getItem('user') == null) {
                window.location.href = "https://nithishprogrammer.github.io/skill.swap/login";
            } else {
                window.location.href = "https://nithishprogrammer.github.io/skill.swap/home";
            }

        }
