import { Medal } from 'dynamics/Medal';

const Languages = () => {
  return (
    <div className='px-2 mb-6'>
      <h2 className='flex text-center subtitle'>Languages</h2>
      <div className='flex flex-row justify-center mb-14'>
        <h2 className='text-2xl mr-6 font-bold w-20 sm:text-4xl sm:mr-10 sm:w-40 lg:mr-40'>
          Spanish
        </h2>
        <div className='flex flex-row sm:mt-1'>
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal />
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <h2 className='text-2xl mr-6 font-bold w-20 sm:text-4xl sm:mr-10 sm:w-40 lg:mr-40'>
          English
        </h2>
        <div className='flex flex-row sm:mt-1'>
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal filled='f' />
          <Medal />
          <Medal />
        </div>
      </div>
    </div>
  );
};

export { Languages };
