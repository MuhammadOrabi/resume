export default function Projects() {
  return (
    <div className="mt-12 spaced-y-10">
      <div>
        <p className="text-lg text-black font-bold no-underline">Create Website</p>
        <div className="text-grey-darkest text-base leading-normal mt-1">
          it’s like WordPress or wix, it’s an application provides create website service, what makes it special is that you can create not just a website or a blog you can create your own web application and it has some AI features.
          <ul>
            <li>
              PHP, Laravel, Vue, Bootstrap, Material Design, Bulma, ......
              <div className="text-grey-darkest text-base leading-normal mt-2">[
                <a href="https://github.com/MuhammadOrabi/create-website" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a> |
                <a href="http://create-website.orabi.me/" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Live</a>
              ]</div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-lg text-black font-bold no-underline">Voting App</p>
        <div className="text-grey-darkest text-base leading-normal mt-1">
          it’s a voting app, so you can register and create polls and people are allowed to vote and there is a data visualization for the votes.
          <ul>
            <li>
              Bootstrap V4, Express.js, MongoDB, React.js
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
