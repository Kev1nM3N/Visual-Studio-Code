let users = [ 
    {
        username: `BeastMuffin`,
        subscriptionStatus: `VIP+`,
        email: `mendez.kevin44@yahoo.com`,
        password: `test123`,
        discordID: `BeastyMuffinMan`,
        lessonsCompleted: [0, 1, 2, 3, 4]
    },

    {
        username: `Mitri`,
        subscriptionStatus: `VIP`,
        email: `something@gmail.com`,
        password: `ellothere`,
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
]

function login(email, password){
    for (let i = 0; i < users.length; i++){
        if (users[i].email === email){
            console.log(users[i])
            if (users[i].password === password){
                console.log(`Log the user in`)
            }

            else{
                console.log(`password is incorrect`)
            }
            return
        }

    }
    console.log(`Could not find an Email that matches.`)
}

login(`mendez.kevin44@yahoo.com`, `test123`);


function register(user){
    users.push(user)
}

register({
    username: `TAILS`,
    subscriptionStatus: `TAILS`,
    password: `TAILS`,
    email: `somTAILSm`,
    discordID: `TAILS`,
    lessonsCompleted: [0]
})

console.log(users);