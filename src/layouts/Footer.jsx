const Footer = () => {
  return (
    <div className='flex flex-col bg-cyan-300'>
      <div className='flex space-x-10 justify-center my-2'>
        <a
          className='flex'
          href='https://www.linkedin.com/in/jhonier-andr%C3%A9s-c%C3%B3rdoba-asprilla-75522b1b5/'
        >
          <img className='w-8' src='linkedin.png' alt='linkedin' />
          <p className='ml-1 mt-1'>Linkedin</p>
        </a>
        <a className='flex' href='https://github.com/JhonierCordoba'>
          <img className='w-8' src='github.png' alt='github' />
          <p className='ml-1 mt-1'>GitHub</p>
        </a>
      </div>
      <div className='flex justify-center'>
        <h6 className='text-white'>
          © 2022 Jhonier Córdoba @ My Personal Site.
        </h6>
      </div>
    </div>
  );
};

export { Footer };
