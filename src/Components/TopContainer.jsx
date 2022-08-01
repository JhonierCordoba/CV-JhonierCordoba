const TopContainer = () => {
  return (
    <div className='flex flex-col gap-20 mb-6 top-container'>
      <div>
        <img className='h-6 ml-10' src='cloud.png' alt='cloud' />
      </div>
      <h1 className='text-5xl text-cyan-500 text-center 2xl:text-6xl'>
        I&apos;m Jhonier
      </h1>
      <h2 className='text-2xl text-center 2xl:text-4xl'>A Programmer.</h2>
      <div className='flex justify-end'>
        <img className='h-6 mr-10' src='cloud.png' alt='cloud' />
      </div>
    </div>
  );
};

export { TopContainer };
