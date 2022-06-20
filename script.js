const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InVkaW5iYXUiLCJpYXQiOjE2NTQ1OTI2MTN9.00Di3HMSfAXN-4XKF3K4-UtYiBQbh9xXTID1F-Z5w_w"
fetch('https://downloads-kx.herokuapp.com/add', { method: 'post', body: { name: 'junglechaser' } })
.then(res => res.json())
.then(res => {
    console.log(res)
})