import { Card } from 'dynamics/Card';

const EducationalBackground = () => {
  return (
    <div className='px-4 mb-6 lg:w-1/2'>
      <h2 className='flex text-center subtitle'>Educational Background</h2>
      <div className='flex flex-col gap-y-6'>
        <Card
          icon='graduation-hat'
          text='In highschool I studied in the Educational Institution of San Luis Gonzaga at Copacabana - Antioquia, there in my two last grades 
          I also made a Systems tech where I learned how to program an arduino, make simple apps and desing in blender .'
        />
        <Card
          icon='data-complexity'
          text='By now I´m studying Systems engineering in the University of Antioquia and I feel very comfortable there, it is so nice and I learned a lot through six semesters,
          and reviwing everyting I learned I realized that want to be a back-end software developer and someday become a senior dev.'
        />
      </div>
    </div>
  );
};

export { EducationalBackground };
