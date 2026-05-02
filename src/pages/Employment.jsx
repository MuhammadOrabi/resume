export default function Employment() {
  return (
    <div className="page-stack">
      <div className="surface-card">
        <a href="https://www.haader.com/" className="text-lg text-black font-bold no-underline hover:underline" target="_blank" rel="noreferrer">Software Engineer at Haader <small>[September 2022 - Present]</small></a>
        <p className="text-grey-darkest text-base leading-normal mt-2">
          Haader is a fast-delivery platform for food and groceries.
        </p>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          <ul>
            <li>Designed and implemented key application features.</li>
            <li>Built RESTful APIs for mobile clients and multiple dashboards.</li>
            <li>Managed and maintained production servers.</li>
          </ul>
        </div>
      </div>
      <div className="surface-card">
        <a href="https://www.bluecrunch.com/" className="text-lg text-black font-bold no-underline hover:underline" target="_blank" rel="noreferrer">Software Engineer at BlueCrunch <small>[November 2018 - August 2022]</small></a>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          <ul>
            <li>
              <div className="text-grey-darkest text-base leading-normal mt-2"><a href="https://botter.ai" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">BOTTER</a></div>
              BOTTER.ai is a customer experience automation platform that helps businesses deliver enterprise conversational AI chatbots and voice bots using NLP and cognitive services.
              <ul>
                <li>Built RESTful APIs for the flow builder dashboard.</li>
                <li>Built RESTful APIs used in chatbot flows, including integrations with client SAP systems.</li>
                <li>Developed an escalation service integrating chatbot workflows with contact center platforms such as Genesys (Cloud, PureConnect) and Cisco (ECE, UCCX, UCCE).</li>
                <li>Built the chatbot core engine for BOTTER v1.</li>
                <li>Deployed and maintained on-premises solutions in client environments, including MOI, Housing Bank, Bank Aljazira, Bupa, Mednet, Mansour, Hamat, and MODON.</li>
              </ul>
            </li>
            <li>Built RESTful APIs with microservices architecture for automotive platforms such as Mansour, Toyota, and Autostore.</li>
            <li>Built RESTful APIs for mobile app management and CMS platforms including L'Oréal, Benfix, Souk Okaz, BARQ, and ValU.</li>
            <li>Integrated payment gateways including Stripe, PayPal, and Payfort.</li>
            <li>Designed databases and implemented backend APIs for mobile and web platforms.</li>
          </ul>
        </div>
      </div>
      <div className="surface-card">
        <span className="text-lg text-black font-bold no-underline">Software Engineer at Quadrant ME <small>[March 2018 - October 2018]</small></span>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          <ul>
            <li>Implemented unit and browser tests using PHPUnit and Laravel Dusk.</li>
            <li>Built a Messenger chatbot for qarenhom.com.</li>
          </ul>
          <div className="text-grey-darkest text-base leading-normal mt-2"><a href="https://www.qarenhom.com" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Qarenhom</a></div>
        </div>
      </div>
      <div className="surface-card">
        <a href="https://bassmat.com/" className="text-lg text-black font-bold no-underline hover:underline" target="_blank" rel="noreferrer">Backend Developer at Bassmat <small>[March 2017]</small></a>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          <ul>
            <li>Built backend APIs integrated with Twitter services.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
