export default function ContatoMap() {
  return (
    <>
      <section className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5369853288116!2d15.7002041!3d-12.7698859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb775b4dbf6dfdb%3A0x43a78822d1399cdb!2sHuambo%2C%20Angola!5e0!3m2!1sen!2sus!4v0000000000000"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </>
  );
}
