export default function Projects() {
  return (
    <div className="page-stack">
      <div className="surface-card">
        <p className="text-lg text-black font-bold no-underline">Create Website</p>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          A website and web application builder inspired by platforms like WordPress and Wix, with additional AI-assisted capabilities.
          <ul>
            <li>
              Stack: PHP, Laravel, Vue, Bootstrap, Material Design, Bulma
              <div className="text-grey-darkest text-base leading-normal mt-2">[
                <a href="https://github.com/MuhammadOrabi/create-website" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a> |
                <a href="http://create-website.orabi.me/" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Live</a>
              ]</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="surface-card">
        <p className="text-lg text-black font-bold no-underline">Voting App</p>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          A polling platform where users can register, create polls, vote, and review vote data through visual summaries.
          <ul>
            <li>
              Stack: Bootstrap v4, Express.js, MongoDB, React
              <div className="text-grey-darkest text-base leading-normal mt-2">[
                <a href="https://github.com/MuhammadOrabi/voting-app-react" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo (legacy code)</a>
              ]</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
