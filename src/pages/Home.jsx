export default function Home() {
  const yearsOfExperience = ((Date.now() - new Date('2018-01-01').getTime()) / (1000 * 60 * 60 * 24 * 365)).toFixed(0);

  return (
    <div className="text-lg text-grey-darkest leading-normal spaced-y-6">
      <div className="text-grey-darkest text-base leading-normal mt-2">
        <a href="https://facebook.com/muhammad.0rabi" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="fab fa-facebook" /></span></a>
        <a href="https://twitter.com/Muhammad0rabi" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="fab fa-twitter" /></span></a>
        <a href="https://www.linkedin.com/in/muhammadorabi/" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="fab fa-linkedin-in" /></span></a>
        <a href="https://github.com/MuhammadOrabi/" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="fab fa-github" /></span></a>
        <a href="https://api.whatsapp.com/send?phone=201021473271" target="_blank" rel="noreferrer" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="fab fa-whatsapp" /></span></a>
        <a href="tel:+201021473271" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="fas fa-mobile" /></span></a>
        <a href="mailto:muhammad@orabi.me" className="text-grey-darker hover:text-black text-sm no-underline hover:underline mx-auto px-4"><span style={{ fontSize: '2em' }}><i className="far fa-envelope" /></span></a>
      </div>
      <h1 className="text-2xl font-extrabold text-black mb-4">Who am I?</h1>
      I am a highly skilled software engineer with over {yearsOfExperience} years of experience in the field. I have a strong background in developing and maintaining software applications, and have expertise in various programming languages and technologies. I am driven by a passion for solving complex problems and creating innovative solutions. In my current role, I have demonstrated my ability to work collaboratively with cross-functional teams and to consistently deliver high-quality software on time and within budget. I am eager to continue my career growth and to take on new challenges in the industry.
    </div>
  )
}
