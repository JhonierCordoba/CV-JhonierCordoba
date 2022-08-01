const ContactMe = () => {
  return (
    <div className='flex flex-col text-center mt-10'>
      <h2 className='subtitle'>Get In Touch</h2>
      <p className='text mx-auto'>
        If you&apos;re intrested in hiring me or asking me anything you can
        contact me by mail.
      </p>
      <a
        className='btn contact-me-button mx-auto w-40 h-7 text-white text-bold my-6'
        href='mailto:jhonier510@gmail.com'
      >
        Contact Me
      </a>
    </div>
  );
};

export { ContactMe };
