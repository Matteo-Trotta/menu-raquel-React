import "./header.css";
export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center justify-content-center align-items-center mt-4  p-0">
          <div className="col-10">
            <img
              className="img-fluid h-75 logo-raquel"
              src="../public/IMG sito/Raquel-logo.png"
              alt="Logo di Raquel giallo"
            />
          </div>

          <div className="col-10">
            <img
              className="img-fluid"
              src="../public/IMG sito/Raquel-header.png"
              alt="Raquel, Alma Experience"
            />
          </div>
        </div>
      </div>
    </>
  );
}
