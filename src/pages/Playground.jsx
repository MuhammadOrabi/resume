export default function Playground() {
  return (
    <div className="mt-12 spaced-y-10">
      <div className="surface-card">
        <p className="text-lg text-black font-bold no-underline">Digital Assistant</p>
        <div className="text-grey-darkest text-base leading-normal mt-1">
          Extreme Solution backend challenge, a simple appointment platform connecting doctors and patients.
          The backend was built with Node.js, Python, and Go. Patients can browse available doctor time slots and book appointments.
          <ul>
            <li>
              REST API implementation
              <div className="text-grey-darkest text-base leading-normal mt-2">[
                <a href="https://github.com/MuhammadOrabi/assessment-task" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a>
              ]</div>
            </li>
            <li>
              Messaging architecture over RabbitMQ
              <div className="text-grey-darkest text-base leading-normal mt-2">[
                <a href="https://gitlab.com/digital-assistant/app" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Gitlab Repo</a>
              ]</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="surface-card">
        <p className="text-lg text-black font-bold no-underline">Chat Module</p>
        <div className="text-grey-darkest text-base leading-normal mt-1">
          Instabug backend challenge, a simple chat module built to explore Ruby with Elasticsearch,
          plus a lightweight Go CLI client powered by Cobra.
          <ul>
            <li>
              Chat service with search capabilities and command-line interaction
              <div className="text-grey-darkest text-base leading-normal mt-2">[
                <a href="https://github.com/MuhammadOrabi/ruby-elasticsearch-go" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a>
              ]</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
