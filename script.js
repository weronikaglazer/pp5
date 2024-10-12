function saveData(event) {
  event.preventDefault()

  const formEl = event.target

  let company = formEl.companyName.value
  let nip = formEl.nip.value
  let city = formEl.city.value
  let street = formEl.street.value
  let comments = formEl.comments.value
  let industry = formEl.industry.value
  let active = formEl.active.value

  formObject = {
    company: company,
    nip: nip,
    city: city,
    street: street,
    comments: comments,
    industry: industry,
    active: active
  }
  console.log(formObject)
}


function fillData(event) {
    customerData = {
        company: "company",
        nip: "13353356",
        city: "Sarasota",
        street: "West Avenue",
        comments: "Comments",
        industry: "Engineering",
        active: "on"
    }


    const fields = ["company","nip","city","street","comments","industry","active"]
    
    formObject = document.forms['myForm']
    console.log(formObject.elements)

    fields.forEach(fieldId => {
        formElement = formObject.elements[fieldId]
        console.log(formElement)
        formElement.value = fieldId
    })
    
    
}