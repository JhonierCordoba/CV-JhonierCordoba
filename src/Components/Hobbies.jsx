import { Card } from 'dynamics/Card';

const Hobbies = () => {
  return (
    <div className='px-4 lg:w-1/2'>
      <h2 className='flex text-center subtitle'>Hobbies</h2>
      <div className='flex flex-col gap-y-6'>
        <Card
          icon='videogames'
          text='I have been playing video games for as long as I can remember and I
            always enjoy my time playing with friends.'
        />
        <Card
          icon='table-tennis'
          text='I really love playing table tennis, I’ts so cool when I go to
            practice it, In the future I like to have a table on my house for
            playing every morning.'
        />
        <Card
          icon='coding'
          text='As a programmer I like practicing web development a lot, but I’m
            better in backend than frontend.'
        />
      </div>
    </div>
  );
};

export { Hobbies };
