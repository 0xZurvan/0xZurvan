
export const submitForm = async (data) => {
  if(data.name !== '' && data.email !== '' && data.message !== '') {
    fetch('https://formsubmit.co/ajax/eb5a8ccf62c988357ee1aa769ac5831d', {
      method: "POST",
      body: JSON.stringify(data),
      headers : { 
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
  }
}
