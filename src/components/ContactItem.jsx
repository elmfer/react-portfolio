const iconStyle = {
  fontSize: '1.5rem',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  width: '2rem',
  padding: '0.5rem',
  textAlign: 'center',
};

function ContactItem({ contact }) {
  return (
   <div className="contact-item">
    <div style={iconStyle}>
      <i className={contact.icon} />
    </div>
    { contact.url ? (
      <a className="flex-grow-1" href={contact.url}>{contact.text}</a>
    ) : (
      <span className="flex-grow-1">{contact.text}</span>
    ) }
   </div>
  );
}

export default ContactItem;