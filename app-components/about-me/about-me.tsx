import { aboutMe } from '../../data/resume-config';

const AboutMe = () => {
  return (
    <div>
        <div className="text-gray-500 mt-4">
          <h1 className='border rounded-lg dark:border-white/40 px-4 py-1 w-fit inner-shadow mb-3 font-semibold text-primary'>
            Frontend Engineer @ IBM
          </h1>
          <p className='mb-2 leading-relaxed'>
              {aboutMe.intro}
          </p>
          <p className='leading-relaxed'>
              {aboutMe.focusDescription}
          </p>
        </div>
    </div>
  )
}

export default AboutMe