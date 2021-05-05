function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/gkcbiel"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Campos
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            {" "}
            <a
              href="https://www.linkedin.com/in/gabriel-kayque-campos-a3153511b/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
