import { Card } from 'dynamics/Card';

const Courses = () => {
  return (
    <div className='px-4 mb-6 lg:w-1/2'>
      <h2 className='flex text-center subtitle'>Courses</h2>
      <div className='flex flex-col gap-y-6'>
        <Card
          icon='domotics'
          text='I took a domotic course based on learning how to implement a system for handling your house from your phone,
        we, me and my team, made an model that let you handle the ligths, see the temperature of diferent rooms and that sort of things.'
        />
        <Card
          icon='logic'
          text='I also took a course in the University of Antioquia, this course was made to learn math logic, specifically to prepare students for
          enter that university, in that course I learned discrete mathematics, secunces and geometry.'
        />
      </div>
    </div>
  );
};

export { Courses };
