let user = [ 
    {
        username: `BeastMuffin`,
        subscriptionStatus: `VIP+`,
        password: `test123`,
        email: `mendez.kevin44@yahoo.com`,
        discordID: `BeastyMuffinMan`,
        lessonsCompleted: [0, 1, 2, 3, 4]
    },

    {
        username: `Mitri`,
        subscriptionStatus: `VIP`,
        password: `mitri2345`,
        email: `something@gmail.com`,
        discordID: `Fire`,
        lessonsCompleted: [0, 1, 2]
    },
    {
        username: `Zen`,
        subscriptionStatus: `VIP`,
        password: `zenny2345`,
        email: `something@outlook.com`,
        discordID: `water`,
        lessonsCompleted: [0, 1]
    }
];

function login(email, password){
    for(let i = 0; i < user.length; i++){
        if (user[i].email === email){
            console.log(user[i])
            if (user[i].password === password){
                console.log(`User is logged in!`)
            }

            else{
                console.log(`Pasword is incorrect. try again`)
            }
            return
        }
    }
    console.log(`Could not find an email that matches`)
}

login(`something@gmail.com`, `mitri2345`);