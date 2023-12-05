import AboutMe from "../components/AboutMe";

const pictureStyle = {
  height: '4in',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backgroundImage: 'url(/react-portfolio/assets/images/fern.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  borderRadius: '1rem',
};

function AboutPage() {
  return (
    <>
    <div style={pictureStyle}>

    </div>
      <AboutMe />
    </>
  )
}

export default AboutPage;