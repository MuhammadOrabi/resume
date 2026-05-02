export default function Home() {
  const yearsOfExperience = (
    (Date.now() - new Date('2018-01-01').getTime()) / (1000 * 60 * 60 * 24 * 365)
  ).toFixed(0)

  return (
    <div className="text-lg text-grey-darkest leading-normal spaced-y-6">
      <div className="surface-card spaced-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-black mb-2 hero-title">Software Engineer, Backend-First</h1>
          <p className="text-base leading-normal hero-lead">
            I build reliable APIs, scalable backend services, and product-ready integrations. I focus on clean architecture,
            practical delivery, and clear collaboration across product teams.
          </p>
        </div>

        <div className="quick-facts text-base">
          <div className="fact">
            <p className="font-bold text-black">Experience</p>
            <p>{yearsOfExperience}+ years building production software</p>
          </div>
          <div className="fact">
            <p className="font-bold text-black">Core stack</p>
            <p>Node.js, PHP/Laravel, Go, PostgreSQL, MongoDB, Redis</p>
          </div>
          <div className="fact">
            <p className="font-bold text-black">Delivery focus</p>
            <p>REST APIs, microservices, integrations, performance optimization</p>
          </div>
          <div className="fact">
            <p className="font-bold text-black">Open to</p>
            <p>Senior backend and full-stack opportunities</p>
          </div>
        </div>
      </div>

      <div className="text-grey-darkest text-base leading-normal mt-2 flex flex-wrap" aria-label="Social and contact links">
        <a href="https://facebook.com/muhammad.0rabi" target="_blank" rel="noreferrer" className="link-chip mr-2 mb-2" aria-label="Facebook profile"><i className="fab fa-facebook" /></a>
        <a href="https://twitter.com/Muhammad0rabi" target="_blank" rel="noreferrer" className="link-chip mr-2 mb-2" aria-label="Twitter profile"><i className="fab fa-twitter" /></a>
        <a href="https://www.linkedin.com/in/muhammadorabi/" target="_blank" rel="noreferrer" className="link-chip mr-2 mb-2" aria-label="LinkedIn profile"><i className="fab fa-linkedin-in" /></a>
        <a href="https://github.com/MuhammadOrabi/" target="_blank" rel="noreferrer" className="link-chip mr-2 mb-2" aria-label="GitHub profile"><i className="fab fa-github" /></a>
        <a href="https://api.whatsapp.com/send?phone=201021473271" target="_blank" rel="noreferrer" className="link-chip mr-2 mb-2" aria-label="WhatsApp contact"><i className="fab fa-whatsapp" /></a>
        <a href="tel:+201021473271" className="link-chip mr-2 mb-2" aria-label="Call phone number"><i className="fas fa-mobile" /></a>
        <a href="mailto:muhammad@orabi.me" className="link-chip mr-2 mb-2" aria-label="Send email"><i className="far fa-envelope" /></a>
      </div>
    </div>
  )
}
