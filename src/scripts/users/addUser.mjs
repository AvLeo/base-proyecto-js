const addUser = async (firstName, lastName, username, password) => {
    const postUser =await fetch('https://dummyjson.com/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password
        })
      })

    const users = JSON.parse(localStorage.getItem('DBTT'))
    const user = await postUser.json();
    users.push(user)
    localStorage.setItem('DBTT', JSON.stringify(users))
}

export{
    addUser
}