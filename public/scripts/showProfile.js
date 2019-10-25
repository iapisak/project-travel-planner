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

const userId = window.location.pathname.split('/')[2]


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

const onSuccess = (user) => {
  const template =`
      <p><strong>Name</strong>: ${user.name} ${user.lastName}</p>
      <p><strong>Email</strong>: ${user.email}</p>
      <p><strong>Member Since</strong>: ${new Date(user.signupDate).toLocaleDateString()}</p>
  `
  $('.user-data').append(template)
}

getProfile()



