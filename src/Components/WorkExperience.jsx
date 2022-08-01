import { Card } from 'dynamics/Card';

const WorkExperience = () => {
  return (
    <div className='px-4 mb-6 lg:w-1/2'>
      <h2 className='flex text-center subtitle'>Work Experience</h2>
      <div className='flex flex-col gap-y-6'>
        <Card
          icon='python'
          text='I worked half year as a python teacher in a course provided by the
              University of Antioquia, that course was made in two parts, the
              first one was teaching the basics of python and the second one was
              about machine learning with python.'
        />
        <Card
          icon='videogame'
          text='I also worked for three months as a videogame developer teacher.
            This course, were also, provided by the university, and the I tach
            the students how to use Unity, bolt, and making their own games
            whith basic tools.'
        />
      </div>
    </div>
  );
};

export { WorkExperience };
