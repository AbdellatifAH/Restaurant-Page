
export default function createContactPageElements() {
    const container = document.querySelector("#content");

    const h1 = document.createElement("h1");
    const phone = document.createElement("div");
    const email = document.createElement("div");
    const address = document.createElement("div");

    h1.textContent = "Contact";
    phone.textContent = "Phone: 03 123456"
    email.textContent = "Email: Example@domain.com"
    address.textContent = "Address: City, Street Name"



    container.append(h1);
    container.append(phone);
    container.append(email);
    container.append(address);

}