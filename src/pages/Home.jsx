import { TopContainer } from 'Components/TopContainer';
import { Resume } from 'Components/Resume';
import { DotSeparator } from 'Components/DotSeparator';
import { WorkExperience } from 'Components/WorkExperience';
import { Hobbies } from 'Components/Hobbies';
import { Courses } from 'Components/Courses';
import { EducationalBackground } from 'Components/EducationalBackground';
import { Languages } from 'Components/Languages';
import { ContactMe } from 'Components/ContactMe';
import { Footer } from 'layouts/Footer';

const Home = () => (
  <main>
    <div>
      <TopContainer />
      <Resume />
      <DotSeparator />
      <div className='section 2xl:mx-20'>
        <WorkExperience />
        <Hobbies />
      </div>
      <DotSeparator />
      <div className='section 2xl:mx-20'>
        <Courses />
        <EducationalBackground />
      </div>
      <DotSeparator />
      <div className='flex flex-col justify-center'>
        <Languages />
        <ContactMe />
      </div>
      <Footer />
    </div>
  </main>
);

export default Home;
