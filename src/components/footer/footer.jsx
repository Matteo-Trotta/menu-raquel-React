export default function Footer() {
  return (
    <footer className="bg-body-success text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            data-mdb-ripple-init=""
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>

          {/* Google */}
          <a
            data-mdb-ripple-init=""
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a
            data-mdb-ripple-init=""
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram" />
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-body" href="#!">
          INSERISCI COPYRIGHT
        </a>
      </div>

      {/* Copyright */}
    </footer>
  );
}
