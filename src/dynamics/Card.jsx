const Card = ({ icon, text }) => {
  return (
    <div className='flex flex-row sm:justify-center 2xl:justify-start'>
      <div className='mx-4 md:w-20'>
        <img src={icon.concat('.png')} alt={icon} />
      </div>
      <div>
        <p className='text'>{text}</p>
      </div>
    </div>
  );
};

export { Card };
