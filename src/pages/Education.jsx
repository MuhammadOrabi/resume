export default function Education() {
  return (
    <div className="mt-12 spaced-y-10">
      <div>
        <a href="http://sha.edu.eg/" className="text-lg text-black font-bold no-underline hover:underline">El-Shorouk Academy <small>[2014 - 2018]</small></a>
        <p className="text-grey-darkest text-base leading-normal mt-1">I'm Computer Science graduate.</p>
      </div>
      <div>
        <a href="https://www.freecodecamp.org/" className="text-lg text-black font-bold no-underline hover:underline">FreeCodeCamp</a>
        <p className="text-grey-darkest text-base leading-normal mt-1">Full stack web developer</p>
        <div className="text-grey-darkest text-base leading-normal mt-2">
          <a href="https://www.freecodecamp.org/muhammadorabi" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Profile</a>{' '}
          <a href="https://www.freecodecamp.org/certification/muhammadorabi/legacy-front-end" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Certificate</a>
        </div>
      </div>
    </div>
  )
}
