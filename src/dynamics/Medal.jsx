const Medal = ({ filled }) => {
  return (
    <div>
      <img
        className='w-8 sm:w-10'
        src={(filled ? '' : 'empty-').concat('medal.png')}
        alt={(filled ? '' : 'empty-').concat('medal')}
      />
    </div>
  );
};

export { Medal };
