import profileimage from '../assets/WhatsApp Image 2024-12-06 at 08.38.02.jpeg';
function Hero() {
  return (
    <section id='hero' style={{ textAlign: 'center' }}>
      <img 
      src={profileimage}
       alt="Alfred Mwangi"
       style={{width: '150px',borderRadius:'50%'}}
       x />
      
      <h1>Hi! I am Alfred Mwangi</h1>
      <p>Frontend Developer | Aspiring Cybersecurity Expert</p>
      <div>
        <a className="btn" href="#projects">View My Work</a>
        <a className="btn" href="https://drive.google.com/file/d/1hYBYbDMvSxpTUOSBBMG752Rz2ATdorQk/view?usp=drive_link" download>Download Resume</a>
      </div>
    </section>
  );
}

export default Hero;
