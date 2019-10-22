const logout = $('#logout');

logout.on('click', (event) => {
  event.preventDefault();
  fetch('/api/v1/logout', {
    method: 'DELETE',
  })
    .then(dataStream => dataStream.json())
    .then(res => {
      if (res.status === 200) {
        window.location = '/';
      }
    })
})

let userId = window.location.pathname.split('/')[2]

const onSuccess = (user) => {
        const template = `
            <p><strong>Name</strong>: ${user.name}</p>
            <p><strong>Email</strong>: ${user.email}</p>
            <p><strong>id</strong>: ${user._id}</p>
        `
        $('.container').append(template)
}

const getProfile = () => {
  fetch(`/api/v1/profiles/${userId}`, {
    method: 'GET',
  })
    .then(dataStream => dataStream.json())
    .then(res => {
       onSuccess(res.data)
    })
    .catch(err => console.log(err));
}

getProfile()


