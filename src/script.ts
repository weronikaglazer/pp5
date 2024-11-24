let ul = document.getElementById("client-list")
clientList: Client[]  = []

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

  let newClient = new Client(company, nip, city, street, comments, industry, active)


  formObject = {
    company: company,
    nip: nip,
    city: city,
    street: street,
    comments: comments,
    industry: industry,
    active: active
  }

  console.log(newClient)
  clientList.push(formObject)
  showList()
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


function showCustomer() {

}

function showForm() {
  document.getElementById("client-form").style.display = "block"
  document.getElementById("client-list").style.display = "none"
}

function showList() {
  document.getElementById("client-form").style.display = "none"
  document.getElementById("client-list").style.display = "block"

  let ul = document.getElementById("client-list")
  ul.innerHTML = ""
  for (let client of clientList) {
    ul.innerHTML += `<li class="list-group-item">${client.company}<li>`
  }
}



