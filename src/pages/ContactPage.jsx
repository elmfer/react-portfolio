import ContactItem from "../components/ContactItem";

const contactItems = [
  {
    text: "(956) 747-2682",
    icon: "fa fa-phone",
  },
  {
    text: "elmfer10@gmail.com",
    url: "mailto:elmfer10@gmail.com",
    icon: "fa fa-envelope",
  },
  {
    text: "GitHub",
    url: "https://github.com/elmfer",
    icon: "fa-brands fa-github",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/elmfer",
    icon: "fa-brands fa-linkedin",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/elmfer74",
    icon: "fa-brands fa-instagram",
  }
];

function ContactPage() {
  return (
    <>
      <h3>Contact Me</h3>
      <p>Interested in networking with me? Feel free to reach out!</p>

      <div className="d-flex flex-column gap-2">
      { contactItems.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      )) }
      </div>
    </>
  )
}

export default ContactPage;