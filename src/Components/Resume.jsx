const Resume = () => {
  return (
    <div className='flex flex-col items-center'>
      <img
        className='h-32 border-gray-500 rounded-lg border-2 shadow-lg mb-10'
        src='profile_picture.PNG'
        alt='foto'
      />
      <h2 className='subtitle 2xl:text-6xl'>Hello.</h2>

      <div className='text-gray-600 w-9/12 text-lg mt-4 text-center sm:text-xl'>
        <p>
          My name is Jhonier Córdoba and I am deeply interested in learning
          about web development and artificial intelligence. I consider myself a
          very responsible person, a fast learner and a good teamplayer. Right
          now I want to acquire solid knowledge as a developer and start working
          at a company with good enviroment.
        </p>
      </div>
    </div>
  );
};

export { Resume };
